start
  = WS formulas:formulas WS {
    return {formulas: formulas};
  }

formulas 
  = lhs:formula WS rhs:formulas {
  	let results = []
    lhs.forEach(f => results.push(f))
    rhs.forEach(f => results.push(f))
    return results;
  }
  / formula:formula

formula
  = "forall" WS vars:variable_list WS pat:trigger_pattern? body:expr_list ";" { 
    return [{
      "type": "formula", 
      "variables": vars, 
      "pattern": pat,
      "body": body
      }] 
  }

trigger_pattern
 = "{" WS patterns:trigger_pattern_list_element* WS last_pat:func_application_or_constant WS"}" { 
  let allPatterns = patterns || [];
  allPatterns.push(last_pat);
  return allPatterns; 
}

trigger_pattern_list_element
 = pat:func_application_or_constant WS "," WS {
   return pat
 }

variable_list
  = lhs:variable WS "," WS rhs:variable_list {
      let results = []
      lhs.forEach(v => results.push(v))
      rhs.forEach(v => results.push(v))
      return results;
  }
  / variable

variable
  = name:IDENTIFIER { 
    return [{"type": "variable", "name": name}]
  }

expr_list
  = exprs:expr*

expr 
  = lhs:parenthesis
  / lhs:and_expr
  / lhs:not_expr
  / lhs:or_expr
  / lhs:eq_expr
  / lhs:func_application_or_constant

eq_expr
  =  WS "=" WS {
    return {"type": "="}
  }

and_expr
  = WS "and" WS {
    return {"type": "and"}
  }

or_expr
  = WS "or" WS {
    return {"type": "or"}
}

not_expr
  = WS "not" WS {
    return {"type": "not"}
}

parenthesis
  = WS "(" WS e:expr_list ")" WS { return e; }

func_application_or_constant
  = WS name:IDENTIFIER WS operands:func_application_arg_list? WS {
    let allOperands = operands || [];
    
    if (allOperands.length == 0) {
      return {"type": "constant", "name": name}  
    } else {
      return {type: "func_application", name: name, args: allOperands}
    }
  }

func_application_arg_list
  =  "(" WS operands:func_application_arg* WS last_operand:expr WS ")" {
    let allOperands = [];
    operands.forEach(o => allOperands.push(o));
    operands.push(last_operand);
    return operands;
  }
func_application_arg
  = WS e:expr WS "," { return e }

IDENTIFIER "identifier"
  = first:[a-zA-Z] remainder:[a-zA-Z0-9]* { return first + remainder.join("") }

WS "whitespace"
  = [ \t\n\r]*
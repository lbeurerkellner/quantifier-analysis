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
  = "forall" WS vars:variable_list WS pat:trigger_pattern? WS body:expr_list ";" { 
    return [{
      "type": "formula", 
      "variables": vars, 
      "pattern": pat,
      "body": body,
      "location": location()
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
    return [{
      "type": "variable", 
      "name": name,
      "location": location()
    }]
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
    return {
      "type": "=",
      "location": location()
    }
  }

and_expr
  = WS "and" WS {
    return {
      "type": "and",
      "location": location()
    }
  }

or_expr
  = WS "or" WS {
    return {
      "type": "or",
      "location": location()
    }
}

not_expr
  = WS "not" WS {
    return {
      "type": "not",
      "location": location()
    }
}

parenthesis
  = WS "(" WS e:expr_list ")" WS { return e; }

func_application_or_constant
  = name:IDENTIFIER WS operands:func_application_arg_list? {
    let allOperands = operands || [];
    
    if (allOperands.length == 0) {
      return {
        "type": "constant", 
        "name": name,
        "location": location()
      }  
    } else {
      return {
        "type": "func_application", 
        "name": name, 
        "args": allOperands,
        "location": location()
      }
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
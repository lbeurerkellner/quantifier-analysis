## TODO

* model for instantiation graph 
    - forward stepping DONE
        - E-Matching DONE
        - apply E-Matching to each pair of term node and formula pattern 
            -> add UI affordance for every valid match/binding which triggers 
                the instantiation of the corresponding formula in the instantiation graph DONE
        - choose binding on forward stepping DONE

    - layouting DONE
    
    - backward stepping
        - Body-Matching DONE
        - apply body-matching to each pair of (non-instantiated) term node and formula body (e.g. use prefix tree?) DONE 
            -> add UI affordance for every valid body match/binding which triggers
                the instantiation of the corresponding formula in the instantiation graph DONE
    
        - TODO: merge obsolete quantifier instantiations (duplicates according to the used binding) after unification induced by backward match DONE
    
    
    - propagate equalities along function applications
    
    - improve behaviour of e-matches via equalities e.g.
    ```
    forall x {f(x)} g(h(x)) and h(x) = f(x);
    forall x {g(f(x))} f(h(x));
    ```

    bonus:
    - improve traces to AST
    - fast body and trigger matching data structures
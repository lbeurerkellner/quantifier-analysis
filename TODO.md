## TODO

* model for instantiation graph 
    - forward stepping
        - E-Matching DONE
        - apply E-Matching to each pair of term node and formula pattern 
            -> add UI affordance for every valid match/binding which triggers 
                the instantiation of the corresponding formula in the instantiation graph
    - backward stepping
        - Body-Matching
        - apply body-matching to each pair of (non-instantiated) term node and formula body (e.g. use prefix tree?)
            -> add UI affordance for every valid body match/binding which triggers
                the instantiation of the corresponding formula in the instantiation graph
    bonus:
    - improve traces to AST
    - fast body and trigger matching data structures
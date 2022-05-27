def SelectElems(elems):
    dict = {
        'twoave':[],
        'oneave':[],
        # 'b':[],
        # 'c':[],
        # 'd':[],
        # 'e':[],
        # 'f':[],
    }
    for i,elem in enumerate(elems):
        if (i % 17==1) or (i==1) :
            dict['twoave'].append(elem)
        elif (i % 17==2) or (i==2):
            dict['oneave'].append(elem)
        # elif (i % 17==9) or (i==9):
        #     dict['b'].append(elem)
        # elif (i % 17==10) or (i==10):
        #     dict['c'].append(elem)
        # elif (i % 17==11) or (i==11):
        #     dict['d'].append(elem)
    print(dict)
    
    return dict
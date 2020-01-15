def jogar():
    print("*********************************")
    print("***Bem vindo ao jogo de Forca!***")
    print("*********************************")
    
    palavra_secreta = 'banana'
    
    enforcou = False
    acertou = False
    
    
    while (not enforcou and not acertou):
        
        chute = input('Chute uma letra: ')
        chute = chute.strip() #Aqui retiramos os epaços em branco
        
        index = 0
        for letra in palavra:
            if (chute.upper() == letra.upper()): #Aqui fazemos o chute e a letra sempre serem maiúscolas
                print('Encontrei a letra {} na posição {}'.format(letra, index))
            index = index +1
            
        print ('jogando ...')
        

    print("Fim do jogo")
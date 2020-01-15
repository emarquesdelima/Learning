
class Conta:
    def __init__(self, numero, titular, saldo, limite):
        print('Construindo objeto... {}'.format(self))
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite
        
    def extrato(self):
        print(f'Saldo de {self.saldo} do titular {self.titular}')
        
    #Método que deposita valores na conta
    def deposita(self, valor): #Aqui temos de adicionar mais um parâmtero, já que ele vai somar um valor em um dos atributos
        self.saldo += valor
    
    #Método que saca valores da conta
    def saca(self, valor):
        self.saldo -= valor
        

const products = [
    //vinagre e outras substancias
    {
        id: 0,
        name: 'vinagre',
        mixWith: [
            {id: 0,
                canMix: true,
                message: "Porquê você vai misturar produtos iguais?"

            },
            {
                id: 1,
                canMix: false, 
                message: "NÃO! O vinagre é ácido, o bicarbonato, alcalino. E você deve lembrar das aulas de química: juntos, um ácido e uma base se 'anulam', tornando a mistura sem utilidade"
            },
            {
                id: 2,
                canMix: false,
                message: "NÃO! Ao acrescentar uma substância ácida à água sanitária, vapores tóxicos são produzidos. Eles podem causar sérias queimaduras nos olhos e graves problemas nos pulmões."
            },
            {
                id: 3,
                canMix: true,
                message: "Pode sim, mas melhor não. Ambas as substâncias não causam nenhum problema para saúde, e a mistura não gera nenhum subproduto tóxico. Porém, o contato com a pele é perigoso, podendo causar alergias em algumas pessoa"
            }
        ]
    },
    //bicarbonato e outras substancias
    {
        id: 1,
        name: 'bicarbonato',
        mixWith: [
             {
                id: 0,
                canMix: false,
                message: "NÃO! O vinagre é ácido, o bicarbonato, alcalino. E você deve lembrar das aulas de química: juntos, um ácido e uma base se 'anulam', tornando a mistura sem utilidade"
            },
            {
                id: 1,
                canMix: true,
                message: "Porquê você vai misturar produtos iguais?"

            },
             {
                id: 2,
                canMix: false,
                message: "Não!"
            },
             {
                id: 3,
                canMix: false,
                message: "Não!"
            }
        ]
    },
    //água sanitária e outras substancias
    {
        id: 2,
        name: 'aguasani',
        mixWith: [
             {
                id: 0,
                canMix: false,
                message: "Não!"
            },
            {
                id: 1,
                canMix: false,
                message: "Não!"
            },
            {
                id: 2,
                canMix: true,
                message: "Porquê você vai misturar produtos iguais?"

            },
             {
                id: 3,
                canMix: false,
                message: "NÃO! A combinação entre os dois produtos químicos produz clorofórmio e ácido muriático. Estes compostos podem prejudicar o sistema nervoso, pulmões, rins, fígado, olhos e pele"
            }
        ]
    },
    //alcool e água sanitária
    {
        id:3,
        name: 'alcool',
        mixWith: [
            {
                id:0,
                canMix: true,
                message: "Pode sim, mas melhor não. Ambas as substâncias não causam nenhum problema para saúde, e a mistura não gera nenhum subproduto tóxico. Porém, o contato com a pele é perigoso, podendo causar alergias em algumas pessoa"
            },
            {
                id: 1,
                canMix: false,
                message: "Não!"
            },
            {
                id: 2,
                canMix: false,
                message:  "NÃO! A combinação entre os dois produtos químicos produz clorofórmio e ácido muriático. Estes compostos podem prejudicar o sistema nervoso, pulmões, rins, fígado, olhos e pele"
            },
            {
                id: 3,
                canMix: true,
                message: "Porquê você vai misturar produtos iguais?"

            },
        ]
    },


]
var formulario = document.getElementById('form')
formulario.addEventListener('submit', handleSubmit);

let msg = document.getElementById('status');
let result = document.getElementById('resultado');




function handleSubmit(e){
    e.preventDefault();
    const selectInformation = document.getElementById('controlselect');
    const selectInformationTwo = document.getElementById('controlselecttwo')
    const testeP = products.find((product)=>{
        return product.id === parseInt(selectInformation.value)
        })

    const testeP2 = testeP.mixWith.find((product)=>{
        return product.id === parseInt(selectInformationTwo.value)
        })
    
    if (testeP2.canMix === true){
        resultado.style.backgroundColor = '#ffff1a';
        msg.style.color = '#000000'
    } else{
         resultado.style.backgroundColor = '#de4251';
         msg.style.color = '#fff'
    }
        msg.innerHTML= testeP2.message;
        resultado.style.transition = '0.4s';
        console.log('mostra as informações: Produto 1: ',selectInformation.value, " |Produto 2: ", selectInformationTwo.value, "Mostra a mensagem: ",testeP2.message) 
        return
    //}
}



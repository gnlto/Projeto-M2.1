function confirmar(){
    var cifradecesar = document.getElementById("cifradecesar");
    var base64 = document.getElementById("base64");
    var criptografar = document.getElementById("criptografar");
    var descriptografar = document.getElementById("descriptografar");

    if (cifradecesar.checked==true){

        var element = document.getElementById("meio");
        element.style.display = "block";
        var element2 = document.getElementById("container");
        element2.style.height = "520px";

        if (criptografar.checked==true){
            //alert("Você escolheu: "+criptografar.value+" "+cifradecesar.value)

            //var metodo = 'cifraDeCesarCriptografar'
            //alert(metodo)

            document.getElementById('texto1').innerHTML
		        = "Digite sua mensagem";

            document.getElementsByName('texto1')[0].placeholder
                = 'A mensagem digitada aqui será criptografada';

            document.getElementById('texto2').innerHTML
                = "Deslocamento (chave)";

            document.getElementsByName('texto2')[0].placeholder
                = 'Insira a chave para a cifragem';    

            document.getElementById('texto3').innerHTML
                = "Mensagem criptografada";

            document.getElementsByName('texto3')[0].placeholder
                = 'A mensagem criptografada aparecerá aqui';
                
            document.getElementById("executar").value = "Criptografar";

            let encryptBtn = document.getElementById('executar');
            let eInput = document.getElementById('retorno');
            let pInput = document.getElementById('mensagem');
            let inputs = [eInput,pInput];

            inputs.forEach(input => {
                input.oninput = () => {
                    input.value = input.value.toUpperCase()
                }
            })

            function encrypt(){
                let pInput = document.getElementById('mensagem').value;
                let solved = ''
                let shiftInput = parseInt(document.getElementById('shiftInput').value)

                for(var i = 0; i < pInput.length; i++){
                    let ascii_num = pInput[i].charCodeAt()
                    let sum = ascii_num + shiftInput
                    sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
                }
                eInput.value = solved
            }

            encryptBtn.addEventListener('click', encrypt)

        } else if (descriptografar.checked==true){
            //alert("Você escolheu: "+descriptografar.value+" "+cifradecesar.value)
            
            //var metodo = cifraDeCesarDescriptografar
            //alert(metodo)

            document.getElementById('texto1').innerHTML
		        = "Digite a mensagem";

            document.getElementsByName('texto1')[0].placeholder
                = 'A mensagem digitada aqui será descriptografada';

            document.getElementById('texto2').innerHTML
                = "Deslocamento (chave)";

            document.getElementsByName('texto2')[0].placeholder
                = 'Insira a chave para a cifragem';    

            document.getElementById('texto3').innerHTML
                = "Mensagem descriptografada";

            document.getElementsByName('texto3')[0].placeholder
                = 'A mensagem descriptografada aparecerá aqui';

            document.getElementById("executar").value = "Descriptografar";

            let encryptBtn = document.getElementById('executar');
            let eInput = document.getElementById('retorno');
            let pInput = document.getElementById('mensagem');
            let inputs = [eInput,pInput];

            inputs.forEach(input => {
                input.oninput = () => {
                    input.value = input.value.toUpperCase()
                }
            })

            function encrypt(){
                let pInput = document.getElementById('mensagem').value;
                let solved = ''
                let shiftInput = -parseInt(document.getElementById('shiftInput').value)

                for(var i = 0; i < pInput.length; i++){
                    let ascii_num = pInput[i].charCodeAt()
                    let sum = ascii_num + shiftInput
                    sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
                }
                eInput.value = solved
            }

            encryptBtn.addEventListener('click', encrypt)
        }
        
    } else if (base64.checked==true){

        var element = document.getElementById("meio");
        element.style.display = "none";
        var element2 = document.getElementById("container");
        element2.style.height = "430px";

        if (criptografar.checked==true){
            //alert("Você escolheu: "+criptografar.value+" "+cifradecesar.value)

            //var metodo = 'cifraDeCesarCriptografar'
            //alert(metodo)

            document.getElementById('texto1').innerHTML
		        = "Digite sua mensagem";

            document.getElementsByName('texto1')[0].placeholder
                = 'A mensagem digitada aqui será criptografada';   

            document.getElementById('texto3').innerHTML
                = "Mensagem criptografada";

            document.getElementsByName('texto3')[0].placeholder
                = 'A mensagem criptografada aparecerá aqui';
                
            document.getElementById("executar").value = "Criptografar";

            let encryptBtn = document.getElementById('executar');
            let eInput = document.getElementById('retorno');
            let pInput = document.getElementById('mensagem');

            function encrypt(){
                eInput.value = btoa(pInput.value)
            } 

            encryptBtn.addEventListener('click', encrypt)
            
        } else if (descriptografar.checked==true){
            //alert("Você escolheu: "+descriptografar.value+" "+cifradecesar.value)
            
            //var metodo = cifraDeCesarDescriptografar
            //alert(metodo)

            document.getElementById('texto1').innerHTML
		        = "Digite a mensagem";

            document.getElementsByName('texto1')[0].placeholder
                = 'A mensagem digitada aqui será descriptografada';   

            document.getElementById('texto3').innerHTML
                = "Mensagem descriptografada";

            document.getElementsByName('texto3')[0].placeholder
                = 'A mensagem descriptografada aparecerá aqui';

            document.getElementById("executar").value = "Descriptografar";

            let encryptBtn = document.getElementById('executar');
            let eInput = document.getElementById('retorno');
            let pInput = document.getElementById('mensagem');

            function encrypt(){
                eInput.value = atob(pInput.value)
            } 

            encryptBtn.addEventListener('click', encrypt)
            
        }
        
    }

}


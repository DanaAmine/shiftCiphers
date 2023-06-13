let txt = "CIPHE!Z"
let key=6
console.log("message: "+txt);
console.log("the encrypted: " +encrypt(txt,key))
let enc = encrypt(txt,key);
console.log("the decrypted: " +encrypt(enc,-key))
function encrypt(message,key){
  let s = ""
  message.split("").map((e)=>{
    code = e.charCodeAt(0)  
    
    if(code >= 65 && code <=90){
      code -= 65;
      code = mod(code+key,26)
      code += 65;
      s+= String.fromCharCode(code)
    }else{
      s+= String.fromCharCode(code)
    }
    
  })
  return s
}

// solve problem of modulo because js has reminder (=doesn't )

function mod(n,p){
  let modulo = n % p;
  if(modulo <0){
    modulo += p;
  }
  return modulo;
}
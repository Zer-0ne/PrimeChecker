let low = document.querySelector('#lowest_limit')
let high = document.querySelector('#highest_limit')
let arr=[];
submit.addEventListener('click',()=>{
    if(low.value===''||high.value===''){
        if(low.value===''&& high.value!=''){
            alert('Please enter lowest limit')
            return false
        }
        if(high.value===''&& low.value!=''){
            alert('Please enter highest limit')
            return false
        }
        if(low.value==='' && high.value==='' ){
            alert('lowest and highest is empty!!')
            return false
        }
    }
    else{
        if(parseInt((low).value)>parseInt((high).value) && parseInt((low).value)>=0 && parseInt((high).value)>=0){
            alert('lowest is greater than highest limit')
            return false
        }
        if(parseInt((low).value)===parseInt((high).value)&& parseInt((low).value)>=0 && parseInt((high).value)>=0){
            alert('lowest limit is equal to highest limit')
            return false
        }
        if(parseInt((low).value)<=0 || parseInt((high).value)<=0){
            alert('Only natural number is allowed')
            return false
        }
    }
    for(let i = parseInt(low.value);i<=parseInt(high.value);i++){
        let flag =0
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=1
                break
            }
        }
        if(i>1 && flag==0){
            arr.push('\t'+i+'')
            
        }
        document.getElementById('result').style.display = 'flex'
        document.querySelector('#result').innerText =arr
        document.querySelector('#result').disabled =true
    }
    arr =[]
})
reset.addEventListener('click',()=>{
    document.getElementById('result').style.display = 'none'
    document.querySelector('#result').innerText =arr
    arr=[]
    low.value =''; high.value='';
})
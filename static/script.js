const uploadInput = document.getElementById('uploadInput');
const btnUpload = document.querySelector('.btn-upload');
const loading = document.querySelector('.load-div');
const progressBar = document.querySelector('.progress-bar');
const progressNumber = document.querySelector('.progress-result-number');
//
btnUpload.addEventListener('click',()=>{
    if(uploadInput.files[0]){   
        let xhr = new XMLHttpRequest();
        let formdata = new FormData();
        xhr.open('post','/upload');
        loading.style.opacity = 1;
        xhr.upload.addEventListener('progress',(e)=>{
            console.log(e.loaded);
            console.log('total:',e.total);
            progressNumber.innerHTML = Math.floor(e.loaded * 100 / e.total);
            progressBar.style.width = e.loaded * 100 / e.total + '%';
            
        })
        xhr.addEventListener('load',()=>{
            if(xhr.status == 200){
                
            console.log('okay')
                location.replace('/finish')
            }
            else{
                console.log('file bad');
            }
        });
        formdata.append('upload',uploadInput.files[0]);
        xhr.send(formdata);
   }
else{
  alert('فایلی را انتخاب بعد سپس آپلود کنید')
 }

})
let tbody = document.querySelector('.box')
let plusAdd = document.querySelector('.plusAdd')
let addModal = document.querySelector('.addModal')
let inp1 = document.querySelector('.inp1')
let inpForImage = document.querySelector('.inpForImage')
let btnAdd = document.querySelector('.btnAdd')
let btnClose= document.querySelector('.btnClose')
let editModal = document.querySelector('.editModal')
let inp3 = document.querySelector('.inp3')
let ababa = document.querySelector('.ababa')
let btnEdit = document.querySelector('.btnEdit')
let btnCloseEdit = document.querySelector('.btnCloseEdit')
let modal3 = document.querySelector(".modal3");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let showinfo = document.querySelector(".showinfo");
let theone = document.querySelector(".theone")
let aaa = document.querySelector(".aaa")
let form1 = document.querySelector('.form1')

//      OBJECT 

let data = [
    {
        id:1,
        image:'https://www.laserskinsurgery.com/wp-content/uploads/2020/06/Plastic-surgery-mans-face-Laser-Surgery-New-York-NYC.png-scaled.jpg',
        TaskName:'Statkem',
        status:true,
    },
    {
        id:2,
        image:'https://www.pravilamag.ru/upload/img_cache/cd3/cd3ed58a88afffc9445e028d1841c8b6_ce_750x500x364x0_cropped_1332x888.jpg',
        TaskName:'Andrew',
        status:false,
    },
    {
        id:4,
        image:'https://u2.9111s.ru/uploads/202302/27/625d6b879a46223118a3cda2d4b0de50.jpg',
        TaskName:'Maskon',
        status:true,
    },
    {
        id:5,
        image:'https://i.pinimg.com/736x/4a/b5/0d/4ab50d02709fcf10352d6dcfb68b8ddf.jpg',
        TaskName:'Chanrel',
        status:false,
    },
    {
        id:6,
        image:'https://biografpro.ru/wp-content/uploads/2023/07/channels4_profile.jpg',
        TaskName:'Mr.Best',
        status:true,
    },
    {
        id:7,
        image:'https://u.9111s.ru/uploads/202301/27/cbffe2e06bee6469e27dc93d35c1a332.jpg',
        TaskName:'Donaad',
        status:false,
    },
    {
        id:8,
        image:'https://kremlin-symbol.ru/upload/iblock/0a4/0a4536934052e5156a2fcab6ece9f255.jpg',
        TaskName:'Putinn',
        status:false,
    },
    
    
];

//   GET USER

function get(newData = data)
{
    tbody.innerHTML = ''
    newData.forEach((el)=>
    {
        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerHTML = el.id
        tdId.classList.add('number')

        let tdImage = document.createElement('img')
        tdImage.src = el.image
        tdImage.classList.add('photos')

        let tdName = document.createElement('td')
        tdName.innerHTML = el.TaskName
        tdName.classList.add('imya')

        let tdPhone = document.createElement('td')
        tdPhone.innerHTML = el.phone

        let tdStatus = document.createElement('td')
        tdStatus.innerHTML = el.status ? 'Active' : 'Inactive';
        tdStatus.classList.add('statusi')

        let tdAction = document.createElement('td')
        tdAction.classList.add('tdAction')
        
        let info = document.createElement('img')
        info.src = './ShowINFO22.png'
        info.classList.add('info')

        info.onclick = () =>
        {
            theone.innerHTML = ""
            showinfo.showModal()
            let tdForId = document.createElement('td')
            tdForId.innerHTML = el.id
            tdForId.classList.add('tdForId')
            let surat = document.createElement("img");
            surat.src = el.image;
            surat.classList.add('surat')
            let one = document.createElement('td')
            one.innerHTML = el.TaskName
            one.classList.add('onee')
            aaa.onclick = () =>
            {
                showinfo.close()
            }
            theone.appendChild(tdForId)
            theone.appendChild(surat);
            theone.appendChild(one);
            theone.appendChild(aaa);
        }
        let imgDelete = document.createElement('img')
        imgDelete.src = './DeleteIcon.png'
        imgDelete.classList.add('delete')
        imgDelete.onclick = () =>
        {
            modal3.showModal()
            yes.onclick = () =>
            {
                deleteUser(el.id)
                modal3.close()
            }
            no.onclick = () =>
            {
                modal3.close()
            }
        } 
        if(el.status == true)
        {
            tdName.classList.add('status')
            tdStatus.classList.add('col')
            tdStatus.style.backgroundColor = 'green'
            tdStatus.style.color = 'wheat'
        }
        else
        {
            tdStatus.style.backgroundColor = 'red'
            tdStatus.style.color = 'white'
        }
        
        let iconEdit = document.createElement('img')
        iconEdit.src = './edit.png'
        iconEdit.classList.add('edit')

        iconEdit.onclick = () =>
        {
            editUser(el.id)
        }

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = el.status
        checkbox.classList.add('check')

        checkbox.onclick = () =>
        {
            completedUser(el.id)
        }
        let obshiy = document.createElement('td')
        obshiy.classList.add('obchiy')
        tdAction.append( iconEdit,checkbox, imgDelete, info)
        obshiy.append(tdId, tdImage,tdName, tdStatus,)
        tr.append(obshiy, tdAction)
        tbody.appendChild( tr)
        })
        plusAdd.onclick = () =>
        {
        addModal.showModal()
        }
        btnClose.onclick = () =>
        {
        addModal.close()
        }
}
get()


//   ADD USER
btnAdd.onclick = () =>
{
    let newUser = 
    {
        id: data.length + 1,
        image:inpForImage.value,
        TaskName: inp1.value,
        status: false,
    }
    data.push(newUser)
    get()
    addModal.close()
    inp1.value = ''
    inpForImage = ''
}



// DELETE USER

function deleteUser(id)
{
    data = data.filter((el)=>el.id != id)
    get()
}


// EDIT USER

let idx = null
function editUser(id)
{
    editModal.showModal()
    let user = data.find((el)=> el.id == id)
    console.log(user);
    inp3.value = user.TaskName
    ababa.value = user.image
    idx = id
}
btnEdit.onclick = () =>
{
    data = data.map((el) => 
    {
        if(el.id == idx)
        {
            el.TaskName = inp3.value
            el.image = ababa.value
        }
        return el
    })
    get()
    editModal.close()
}
btnCloseEdit.onclick = () =>
{
    editModal.close()
}


//  COMPLETED USER 

function completedUser(id)
{
    data = data.map((el) =>
    {
        if(el.id == id)
        {
            el.status = !el.status
        }
        return el
    })
    get()
}


//   FILTER

function applyFilter()
{
    let selectedValue = document.querySelector('.statusFilter').value
    let filterData = data.filter(item => 
        {
            if(selectedValue === 'active' && item.status == true)
            {
                return true
            }
            else if(selectedValue == 'inactive' && item.status == false)
            {
                return true
            }
            else if(selectedValue == 'all')
            {
                return true
            }
            return false
        })
    get(filterData)
}
document.querySelector('.statusFilter').addEventListener('change', applyFilter)


//   SEARCH 

form1.onsubmit=(event)=>{
    event.preventDefault();
    let search = form1["srch"].value.toLowerCase().trim();
    data = data.filter((el)=> el.TaskName.toLowerCase().includes(search))
    get(data)
}



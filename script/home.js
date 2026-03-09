let allIssues = [];
const loadAllIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((res) => res.json())
        .then((json) => {
            displayAllIssues(json.data);
            allIssues = json.data;
        });

}

const loadIssue = (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then(data => displayIssueModal(data.data));

}

const displayIssueModal = (issue) => {
    const modalBox = document.getElementById('modal-box');

    modalBox.innerHTML = `
               <h3 class="text-lg font-bold mb-4">${issue.title}</h3>
                <span class="bg-green-500 p-1 rounded-full">${issue.status}</span>
                <span ">${issue.assignee}</span>
                <span ">${issue.updatedAt}</span>
                  <div class="my-3">
                        <button class="btn btn-outline btn-error bg-[#FEECEC] rounded-full"><i
                                class="fa-light fa-bug"></i>Bug</button>
                        <button class="btn btn-dash btn-warning bg-[#FFF8DB] rounded-full ml-2"> <i
                                class="fa-light fa-life-ring"></i>help wanted</button>
                    </div>
                    <p>${issue.description}</p>

                <div class="bg-slate-400 rounded-md p-4 my-4 flex justify-between">
                    <div>
                           <p>Assignee</p>
                           <p class="font-bold">${issue.assignee}</p>
                    </div>
                    <div>
                           <p>priority</p>
                           <p class="font-bold">${issue.priority}</p>
                    </div>
                 
                </div>

                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
        `;
    my_modal_5.showModal();


}




const displayAllIssues = (issues) => {

    const allIssuesContainer = document.getElementById('all-issues-container')
    allIssuesContainer.innerHTML = "";

    for (let issue of issues) {
        const btnDiv = document.createElement('div');

        btnDiv.innerHTML = `

           <div  id="card" class="shadow-md  rounded-lg">
                <div class="flex justify-between p-4">
                    <img src="assets/Open-Status.png" alt="">
                    <button onclick="loadIssue(${issue.id})" class="bg-[#FEECEC] text-red-500 px-5 rounded-full uppercase">${issue.priority}</button>
                </div>
                <div class=" space-y-2 px-4">
                    <h2 class="text-2xl font-semibold">${issue.title}</h2>
                    <p class="truncate">${issue.description}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline btn-error bg-[#FEECEC] rounded-full"><i
                                class="fa-light fa-bug"></i>Bug</button>
                        <button class="btn btn-dash btn-warning bg-[#FFF8DB] rounded-full ml-2"> <i
                                class="fa-light fa-life-ring"></i>help wanted</button>
                    </div>

                </div>
                <hr class=" my-5 bg-[#E4E4E7]">
                <p class="px-4">${issue.author}</p>
                <p class="p-4">${issue.createdAt}</p>

                

            </div>
        `;
        allIssuesContainer.appendChild(btnDiv);
    }
    const issueLength = document.getElementById('issue-length');

    issueLength.innerText = issues.length;

}

loadAllIssues();

const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');

function toggleStyle(id) {
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    openBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    closedBtn.classList.remove('bg-[#3B82F6]', 'text-white');


    const selectedBtn = document.getElementById(id);
   
    selectedBtn.classList.add('bg-[#3B82F6]', 'text-white');


    let issueList = allIssues;
    if (id === 'open-btn') {
        issueList= allIssues.filter(item=>item.status==='open')
       
    } else if (id === 'closed-btn') {
        issueList=allIssues.filter(item=>item.status==='closed')

    }
    console.log(issueList, id);
    displayAllIssues(issueList);
}




    

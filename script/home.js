const loadAllIssues=()=>{
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=> res.json())
    .then((json)=>displayAllIssues(json.data));
}

const displayAllIssues=(issues)=>{
  
    const allIssuesContainer = document.getElementById('all-issues-container')
    allIssuesContainer.innerHTML ="";

    for (let issue of issues){
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML =`

           <div id="card" class="shadow-md rounded-lg">
                <div class="flex items-center justify-between p-4">
                    <img src="assets/Open-Status.png" alt="">
                    <button class="bg-[#FEECEC] text-red-500 px-5 rounded-full">${issue.priority}</button>
                </div>
                <div class="space-y-2 px-4">
                    <h2 class="text-2xl font-semibold">${issue.title}</h2>
                    <p>${issue.description}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline btn-error bg-[#FEECEC] rounded-full"><i
                                class="fa-light fa-bug"></i>Bug</button>
                        <button class="btn btn-dash btn-warning bg-[#FFF8DB] rounded-full ml-2"> <i
                                class="fa-light fa-life-ring"></i>help wanted</button>
                    </div>

                </div>
                <hr class=" my-5 bg-[#E4E4E7]">

            </div>
        `;
        allIssuesContainer.appendChild(btnDiv);
    }

}

loadAllIssues();
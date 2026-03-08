const loadAllIssues=()=>{
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=> res.json())
    .then((json)=>displayAllIssues(json.data));
}

const displayAllIssues=(issues)=>{
  
    const allIssuesContainer = document.getElementById('all-issues-container')
    allIssuesContainer.innerHTML ="";

    // for (let issue of issues){
    //     const btnDiv = document.createElement('div');
    //     btnDiv.innerHTML =`
    //     //    <h3>${issue.title}</h3>
    //     // <p>${issue.description}</p>

    //     // <p>Status: ${issue.status}</p>
    //     // <p>Author: ${issue.author}</p>
    //     // <p>Priority: ${issue.priority}</p>
    //     // <p>Label: ${issue.label}</p>
    //     // <p>Created: ${issue.createdAt}</p>
    //     // `;
    //     allIssuesContainer.appendChild(btnDiv);
    // }

}

loadAllIssues();
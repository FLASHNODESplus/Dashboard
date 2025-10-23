
const plans=[
{title:'Basic Plan',ram:'2 GB RAM',cpu:'1 vCPU',storage:'7.5 GB SSD',backups:'1 Backup / 1 DB / 1 Port',price:'100',upi:'upi://pay?pa=muhammadhayaan@fam&pn=BasicPlan&am=100&cu=INR'},
{title:'Starter Plan',ram:'4 GB RAM',cpu:'1.5 vCPU',storage:'15 GB SSD',backups:'1 Backup / 1 DB / 1 Port',price:'250',upi:'upi://pay?pa=muhammadhayaan@fam&pn=StarterPlan&am=250&cu=INR'},
{title:'Advanced Plan',ram:'6 GB RAM',cpu:'1.8 vCPU',storage:'22.5 GB SSD',backups:'1 Backup / 1 DB / 1 Port',price:'400',upi:'upi://pay?pa=muhammadhayaan@fam&pn=AdvancedPlan&am=400&cu=INR'},
{title:'Pro Plan',ram:'8 GB RAM',cpu:'2 vCPU',storage:'30 GB SSD',backups:'2 Backups / 2 DB / 2 Ports',price:'500',upi:'upi://pay?pa=muhammadhayaan@fam&pn=ProPlan&am=500&cu=INR'},
{title:'Elite Plan',ram:'12 GB RAM',cpu:'3 vCPU',storage:'45 GB SSD',backups:'2 Backups / 2 DB / 2 Ports',price:'800',upi:'upi://pay?pa=muhammadhayaan@fam&pn=ElitePlan&am=800&cu=INR'},
{title:'Extreme Plan',ram:'16 GB RAM',cpu:'4 vCPU',storage:'60 GB SSD',backups:'3 Backups / 3 DB / 3 Ports',price:'1000',upi:'upi://pay?pa=muhammadhayaan@fam&pn=ExtremePlan&am=1000&cu=INR'},
{title:'Titan Plan',ram:'24 GB RAM',cpu:'6 vCPU',storage:'80 GB SSD',backups:'3 Backups / 3 DB / 3 Ports',price:'1400',upi:'upi://pay?pa=muhammadhayaan@fam&pn=TitanPlan&am=1400&cu=INR'},
{title:'Godlike Plan',ram:'32 GB RAM',cpu:'8 vCPU',storage:'120 GB SSD',backups:'4 Backups / 4 DB / 4 Ports',price:'1900',upi:'upi://pay?pa=muhammadhayaan@fam&pn=GodlikePlan&am=1900&cu=INR'}
];

let currentPlan=0;

function showPlan(index){
    const planDiv=document.getElementById('plan-card');
    const plan=plans[index];
    planDiv.innerHTML=`<h3>${plan.title}</h3>
    <p>${plan.ram} | ${plan.cpu} | ${plan.storage} | ${plan.backups}</p>
    <p>₹${plan.price}/month</p>
    <button class="buy-btn" onclick="showQR('${plan.upi}')">Buy Now</button>`;
}

function nextPlan(){currentPlan=(currentPlan+1)%plans.length;showPlan(currentPlan);}
function prevPlan(){currentPlan=(currentPlan-1+plans.length)%plans.length;showPlan(currentPlan);}

function showQR(upi){
    const qrSection=document.getElementById('qr-section');
    qrSection.style.display='block';
    const qrCanvas=document.getElementById('qr');
    const qr = new QRious({element: qrCanvas,value:upi,size:200});
    qrSection.scrollIntoView({behavior:'smooth'});
}

// Initial load
document.addEventListener('DOMContentLoaded',()=>{
    showPlan(currentPlan);
});

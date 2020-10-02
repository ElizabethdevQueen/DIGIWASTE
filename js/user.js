const userState = function(){
    let currentState = new dashboardState(this);
    this.init = function(){
        this.change(new dashboardState);
    }
    this.change = function(state){
        currentState = state;
    }
};
// Dashboard State
const dashboardState = function(user){
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="container">
                <div class="item">
                    <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                        <h3 class="text-muted text-uppercase mt-8 mb-5">Status Update: </h3>
                        <span class="badge badge-custom">Pending </span>                    
                    </div>
                </div>
                <div class="item">
                    <div class="card-box tilebox-one"><i class="icon-paypal float-right text-muted"></i>
                        <h3 class="text-muted text-uppercase mt-0">Amount Paid: </h3>
                        <h2 class="">#<span data-plugin="counterup">3,600</span></h2>
                    </div>
                </div>
                <div class="item">
                    <div class="card-box tilebox-one"><i class="icon-rocket float-right text-muted"></i>
                        <h6 class="text-muted text-uppercase mt-0">Pending Payment: </h6>
                        <h2 class="" data-plugin="counterup">#15,000</h2>
                        <span class="text-muted">Last 10months </span>
                    </div>
                </div>
            </div>
    `;
}

//instantiate pagestate
const user = new userState();

//init the first state
user.init();

//UI Variables
const dashboard = document.getElementById('dashboard');

//Dashboard
dashboard.addEventListener('click', (e) => {
    page.change(new dashboardState);

    e.preventDefault();
});
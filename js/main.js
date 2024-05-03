;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
    div.id="preloader",
    div.className="preloader",
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div,document.body.firstChild),window.onload=function() {
    document.getElementById("preloader").classList.add("off")
};

function startCounting() {
    const yearsExperience = document.getElementById('yearsExperience');
    const clientsWorldwide = document.getElementById('clientsWorldwide');
    const totalProjects = document.getElementById('totalProjects');

    const targetYears = 8;
    const targetClients = 42;
    const targetProjects = 149;

    const duration = 2500;
    const interval = 20;

    const stepYears = targetYears / (duration / interval);
    const stepClients = targetClients / (duration / interval);
    const stepProjects = targetProjects / (duration / interval);

    let currentYears = 0;
    let currentClients = 0;
    let currentProjects = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timer = setInterval(() => {
                    currentYears += stepYears;
                    currentClients += stepClients;
                    currentProjects += stepProjects;

                    yearsExperience.textContent = Math.round(currentYears);
                    clientsWorldwide.textContent = Math.round(currentClients);
                    totalProjects.textContent = Math.round(currentProjects);

                    if (currentYears >= targetYears && currentClients >= targetClients && currentProjects >= targetProjects) {
                        clearInterval(timer);
                    }
                }, interval);
                observer.disconnect(); // Stop observing once the numbers are visible
            }
        });
    });

    observer.observe(yearsExperience); // Observe the element containing the numbers
}

// Start counting when the window loads
window.addEventListener('load', startCounting);

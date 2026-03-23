window.addEventListener('load', function() {
    const searchicon1 = document.querySelector("#searchicon1");
    const search1 = document.querySelector("#searchinput1");

    if (searchicon1) {
        searchicon1.addEventListener('click', function() {
            search1.style.display = 'flex';
            search1.style.visibility = 'visible';
            search1.style.opacity = '1';
            searchicon1.style.display = 'none';
        });
    }

    const searchicon2 = document.querySelector("#searchicon2");
    const search2 = document.querySelector("#searchinput2");

    if (searchicon2) {
        searchicon2.addEventListener('click', function() {
            search2.style.display = 'flex';
            search2.style.visibility = 'visible';
            search2.style.opacity = '1';
            searchicon2.style.display = 'none';
        });
    }

    const bar = document.querySelector('.fa-bars');
    const cross = document.querySelector('#hdcross');
    const headerbar = document.querySelector('.headerbar');

    if (bar) {
        bar.addEventListener('click', function() {
            setTimeout(function() {
                cross.style.display = 'block';
            }, 200);
            headerbar.style.right = '0';
        });
    }

    if (cross) {
        cross.addEventListener('click', function() {
            cross.style.display = 'none';
            headerbar.style.right = '-100%';
        });
    }

    const filter = document.getElementById("categoryFilter");
    const clubs = document.querySelectorAll(".item2");

    if (filter) {
        filter.addEventListener("change", function() {
            const selectedCategory = filter.value.toLowerCase();
            clubs.forEach(function(club) {
                const clubCategory = club.dataset.category.toLowerCase();
                if (selectedCategory === "all" || clubCategory.includes(selectedCategory)) {
                    club.style.display = "block";
                } else {
                    club.style.display = "none";
                }
            });
        });
    }
});
const navbarItems = document.querySelectorAll('.bottom-navbar__item');

      const indicator = document.querySelector('.bottom-navbar__indicator');

      navbarItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          navbarItems.forEach((eachItem) =>
            eachItem.classList.remove('active')
          );
          item.classList.add('active');

          const parentWidth = item.parentElement.clientWidth;
          const leftMargin = (parentWidth / navbarItems.length) * index;
          indicator.style.left = leftMargin + 'px';
        });
      });

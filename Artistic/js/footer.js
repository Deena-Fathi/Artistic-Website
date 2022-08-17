const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Categories</li>
                <li><a href="#" class="footer-link">Anime</a></li>
                <li><a href="#" class="footer-link">Cartoons</a></li>
                <li><a href="#" class="footer-link">Chibi</a></li>
                <li><a href="#" class="footer-link">Gore</a></li>
                <li><a href="#" class="footer-link">Digital</a></li>
                <li><a href="#" class="footer-link">Traditional</a></li>
                <li><a href="#" class="footer-link">Grafiti</a></li>
                <li><a href="#" class="footer-link">Ink-Art</a></li>
                <li><a href="#" class="footer-link">Painted</a></li>
                <li><a href="#" class="footer-link">Stationary</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Artists</li>
                <li><a href="#" class="footer-link">Artist1</a></li>
                <li><a href="#" class="footer-link">Artist2</a></li>
                <li><a href="#" class="footer-link">Artist3</a></li>
                <li><a href="#" class="footer-link">Artist4</a></li>
                <li><a href="#" class="footer-link">Artist5</a></li>
                <li><a href="#" class="footer-link">Artist6</a></li>
                <li><a href="#" class="footer-link">Artist7</a></li>
                <li><a href="#" class="footer-link">Artist8</a></li>
                <li><a href="#" class="footer-link">Artist9</a></li>
                <li><a href="#" class="footer-link">Artist10</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@artistic.com, customersupport@artistic.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Artistic, Best masterpices and more online store</p>
    `;
}

createFooter();
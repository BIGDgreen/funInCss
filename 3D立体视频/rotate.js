(function handleMove() {
    let moveable = false;
    let box = document.getElementsByClassName('box')[0];
    // 旋转初始量
    let init = {
        x: -20,
        y: 40
    };
    let downXY, moveXY;
    window.addEventListener('mousedown', (e) => {
        downXY = {
            x: e.clientX,
            y: e.clientY
        };
        moveable = true;
        // console.log('down', downXY);
        // 更新初始量
        let transform = box.style.transform;
        if(transform) {
            let arr = transform.split(' ');
            // console.log("transform::", arr);
            // console.log("x:::", arr[0].match(/rotateX\((.*)deg\)/));
            let nowXY = {
                x: arr[0].match(/rotateX\((.*)deg\)/)[1],
                y: arr[1].match(/rotateY\((.*)deg\)/)[1]
            };
            init = {
                x: nowXY.x % 360,
                y: nowXY.y % 360
            };
        }
        window.addEventListener('mousemove', (e) => {
            if(moveable) {
                moveXY = {
                    x: e.clientX,
                    y: e.clientY
                };
                // console.log('move', moveXY);
                rotateBox();
            }
        })
    })
    
    window.addEventListener('mouseup', (e) => {
        moveable = false;
        // console.log('up', upXY);
    })

    function rotateBox() {
        let x = moveXY.x - downXY.x;
            y = moveXY.y - downXY.y;
            speed = 0.5;
        let res = {
            x: init.x + speed * y + 'deg',
            y: init.y + speed * x + 'deg'
        };
        box.style.transform = `rotateX(${res.x}) rotateY(${res.y}) translate3d(0, 0, 0)`
    }
})();

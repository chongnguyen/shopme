window.addEventListener('DOMContentLoaded', () => {
    class Slider {
        constructor(slider, next, prev) {
            this.slider = document.getElementById('slider_content');
            this.next = document.getElementById('next');
            this.prev = document.getElementById('prev');
            this.count = 0;
        }
        init(){
            let len = slider.children.length;
            this.slider.style.width = len * 100 + "%";

            this.next.addEventListener('click', () => {
                if(this.count === len -1){
                    this.count = -1;
                }
                this.slider.style.marginLeft = -100 * ++this.count + '%';
            });
            this.prev.addEventListener('click', () => {
                if(this.count === 0){
                    this.count = len;
                }
                this.slider.style.marginLeft = -100 * --this.count + '%';
            });

            let idIterval = setInterval(() => {
                if(this.count === len - 1){
                    clearInterval(idIterval);
                    this.count = -1;
                }
                this.slider.style.marginLeft = -100 * ++this.count + '%';
            }, 5000);
        }
    }

    class TabContent {
        constructor(btn_tab){
            this.tabContent = document.getElementsByClassName(btn_tab);
        }

        init(){
            for(let i = 0, len = this.tabContent.length; i < len; i++){
                this.showTab(this.tabContent[i]);
            }
        }

        showTab(btn){
            btn.addEventListener('click', function(event){
                event.preventDefault();
                let current = document.getElementsByClassName('btn-active');
                console.log(current);
                current[0].className = current[0].className.replace(" btn-active", "");
                this.className += " btn-active";
            });
        }
    }

    new Slider('slider_content', 'next', 'prev').init();
    new TabContent('btn-tab').init();

});
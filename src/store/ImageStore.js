import { observable, action, runInAction } from 'mobx';
import 'babel-polyfill';

class ImageStore {
    @observable links = [];
    @observable inputValue = '';
    @observable status = 'pending';
    @observable page = 1;
    ACCESS_KEY = 'c6c694af816fed4c792fdcafc07720f5160db1454ec563344f5fd1955b95b451';

    @action setInput(text) {
        this.inputValue = text;
    }

    //disabled
    @action async setPage() {
        const url = `https://api.unsplash.com/search/photos?query=${this.inputValue}&client_id=${this.ACCESS_KEY}`;
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        /*It doesn't work really well. 'totalPages' can't keep up refreshing. */
        let totalPages = jsonData.total_pages;
        let randomPage = Math.floor(Math.random() * totalPages) + 1;
        this.page = randomPage;
    }

    @action async fetchImages() {
        this.links.clear();
        this.status = 'pending';
        //this.setPage();
        const url = `https://api.unsplash.com/search/photos?per_page=30&query=${this.inputValue}&client_id=${this.ACCESS_KEY}`;
        try {
            const rawImages = await fetch(url);
            const jsonImages = await rawImages.json();
            let imagesLinks = jsonImages.results.map(el => el.urls.regular);
            runInAction(() => {
                this.links.replace(imagesLinks);
                this.status = 'done';
            })
        }
        catch (error) {
            runInAction(() => {
                this.status = 'error';
            })
        }
        this.inputValue = '';
    }
}

const store = new ImageStore();
export default store;
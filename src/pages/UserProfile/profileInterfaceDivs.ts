import '../../../public/assets/css/userProfilePage.css';
import '../../../public/assets/css/body.css';
import TagCreator from '../../module/tagCreator';

export function createProfile() {
    const infoAboutUser = new TagCreator (
        'div',
        'infoAboutUser',
        'infoAboutUser',
        'userProfilePage',
        '', 
    )
    infoAboutUser.createAndAppend();
}
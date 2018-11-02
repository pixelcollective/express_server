// import 'jquery';
import $ from "jquery";
import 'modaal/dist/js/modaal';
import 'modern-normalize/modern-normalize.css';
import 'modaal/dist/css/modaal.min.css';
import './style.scss';

$(".bio__module a").modaal({
    custom_class : 'bio__modal-container',
});

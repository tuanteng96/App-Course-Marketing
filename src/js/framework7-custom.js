import Framework7, { utils, getDevice, createStore } from 'framework7/lite';
import Dialog from 'framework7/components/dialog';
import Popup from 'framework7/components/popup';
import Popover from 'framework7/components/popover';
import Actions from 'framework7/components/actions';
import Sheet from 'framework7/components/sheet';
import Toast from 'framework7/components/toast';
import Preloader from 'framework7/components/preloader';
import Progressbar from 'framework7/components/progressbar';
// import Sortable from 'framework7/components/sortable';
// import Swipeout from 'framework7/components/swipeout';
// import Accordion from 'framework7/components/accordion';
// import VirtualList from 'framework7/components/virtual-list';
import ListIndex from 'framework7/components/list-index';
import Tabs from 'framework7/components/tabs';
import Panel from 'framework7/components/panel';
// import Card from 'framework7/components/card';
// import Chip from 'framework7/components/chip';
// import Form from 'framework7/components/form';
import Input from 'framework7/components/input';
// import Checkbox from 'framework7/components/checkbox';
// import Radio from 'framework7/components/radio';
// import Toggle from 'framework7/components/toggle';
// import Range from 'framework7/components/range';
// import Stepper from 'framework7/components/stepper';
// import SmartSelect from 'framework7/components/smart-select';
// import Grid from 'framework7/components/grid';
// import Picker from 'framework7/components/picker';
import InfiniteScroll from 'framework7/components/infinite-scroll';
import PullToRefresh from 'framework7/components/pull-to-refresh';
import Fab from 'framework7/components/fab';
// import Searchbar from 'framework7/components/searchbar';
// import Messages from 'framework7/components/messages';
import Swiper from 'framework7/components/swiper';
import PhotoBrowser from 'framework7/components/photo-browser';
import Notification from 'framework7/components/notification';
import Autocomplete from 'framework7/components/autocomplete';
import Tooltip from 'framework7/components/tooltip';
import Skeleton from 'framework7/components/skeleton';
// import TextEditor from 'framework7/components/text-editor';
// import Breadcrumbs from 'framework7/components/breadcrumbs';

Framework7.use([
    Dialog,
    Popup,
    Popover,
    Actions,
    Sheet,
    Toast,
    Preloader,
    Progressbar,
    // Sortable,
    // Swipeout,
    // Accordion,
    // VirtualList,
    ListIndex,
    Tabs,
    Panel,
    // Card,
    // Chip,
    // Form,
    Input,
    // Checkbox,
    // Radio,
    // Toggle,
    // Range,
    // Stepper,
    // SmartSelect,
    // Grid,
    // Picker,
    InfiniteScroll,
    PullToRefresh,
    Fab,
    // Searchbar,
    // Messages,
    Swiper,
    PhotoBrowser,
    Notification,
    Autocomplete,
    Tooltip,
    Skeleton,
    // TextEditor,
    // Breadcrumbs
]);

export default Framework7;
export { utils, getDevice, createStore };
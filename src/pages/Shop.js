import ProductList from "./components/ProductList";
import Categories from "./components/ShopCategories";
import styles from '../assets/styles/shop.module.css'
import Breadcrumb from "./components/BreadCrumb";
import SectionTitle from "./components/SectionTitle";

const subCategories = [
    {
        title: "Sous-catégories d'Ordinateur Portable",
        items: [
            { name: "PC Portable Gamer", count: 2 },
            { name: "PC Portable", count: 35 },
            { name: "PC Portable Occasion", count: 19 },
            { name: "MacBook", count: 6 },
            { name: "Sac à dos, Cartable", count: 3 },
            { name: "Chargeur PC Portable", count: 23 },
        ]
    },
    {
        title: "Sous-catégories de PC de Bureau",
        items: [
            { name: "PC Gamer", count: 12 },
            { name: "PC Professionnel", count: 25 }
        ]
    },
    {
        title: "Sous-catégories de Composants PC",
        items: [
            { name: "Processeurs", count: 15 },
            { name: "Cartes Graphiques", count: 23 },
            { name: "RAM", count: 35 }
        ]
    },
    {
        title: "Sous-catégories de Périphériques PC",
        items: [
            { name: "Claviers", count: 45 },
            { name: "Souris", count: 50 },
            { name: "Écrans", count: 35 }
        ]
    },
    {
        title: "Sous-catégories de High-Tech",
        items: [
            { name: "Smartphones", count: 20 },
            { name: "Tablettes", count: 10 },
            { name: "Montres Connectées", count: 7 }
        ]
    }
];
const categories = [
    {
        title: "Ordinateur Portable",
        count: 82,
        items: [
            { name: "PC Portable Gamer", count: 2 },
            { name: "PC Portable", count: 35 },
            { name: "PC Portable Occasion", count: 19 },
            { name: "MacBook", count: 6 },
            { name: "Sac à dos, Cartable", count: 3 },
            { name: "Chargeur PC Portable", count: 23 },
        ],
        isOpen: true,
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    },
    {
        title: "PC de Bureau",
        count: 37,
        items: [],
        isOpen: false,
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    },
    {
        title: "Composants PC",
        count: 73,
        items: [],
        isOpen: false,
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    },
    {
        title: "Périphériques PC",
        count: 90,
        items: [],
        isOpen: false,
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    },
    {
        title: "High-Tech",
        count: 37,
        items: [],
        isOpen: false,
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    }
];


function Shop() {
    const options = {
    totalProducts : 35,
    productsDisplayed : { start: 1, end: 27 },
    sortOptions : [
        { label: 'Tri par défaut', value: 'default' },
        { label: 'Prix croissant', value: 'price-asc' },
        { label: 'Prix décroissant', value: 'price-desc' }
    ]
    ,handleSortChange : (sortValue) => {
        console.log('Selected sort:', sortValue);
        // Handle sort change logic here
    }};

    return (
        <div>
            <Breadcrumb items={["Home", <> Shop &nbsp; <i className='fa fa-store'></i></>]} />
            <SectionTitle title={`Shop ${''}`} />
            <div className={styles.shopContainer}>
                <Categories categories={categories} subCategories={subCategories} priceRange={{ min: 0, max: 50000 }} />
                <ProductList options={options} />
            </div>
        </div>
    );
}

export default Shop;
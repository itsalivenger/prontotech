import Breadcrumb from "./components/BreadCrumb";
import CatalogContent from "./components/CatalogContent";
import SectionTitle from "./components/SectionTitle";

function Catalog() {
    return (
        <div>
            <Breadcrumb items={["Home", "Catalog"]} />
            <SectionTitle title={"Explore Our Catalog"} />
            <p style={{textAlign: "center"}}>
                Discover the ultimate collection of cutting-edge technology
                in our carefully curated catalog. Whether you're looking
                for the latest smartphones, powerful laptops,
                or high-performance desktops, our catalog offers a
                wide range of products to meet your needs.
                Dive into our selection of premium components,
                peripherals, and accessories designed to enhance
                your tech experience.
            </p>
            <CatalogContent />
        </div>
    );
}

export default Catalog;
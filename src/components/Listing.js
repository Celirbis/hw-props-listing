import PropTypes from 'prop-types';

function Listing(props) {

    const { items } = props;
    const itemsRedacted = [];
    let classCode, displayedPrice, displayedTitle;

    for (let i = 0; i < items.length; i++) {

        if (items[i].state != "active") continue;

        displayedTitle = items[i].title.length > 50 ? (items[i].title.substring(0, 50) + "...") : items[i].title;

        if (items[i].currency_code === "USD") {
            displayedPrice = "$" + items[i].price;
        }
        else if (items[i].currency_code === "EUR") {
            displayedPrice = "€" + items[i].price;
        }
        else {
            displayedPrice = items[i].price + " " + items[i].currency_code;
        }

        if (items[i].quantity <= 10) {
            classCode = "level-low";
        }
        else if (items[i].quantity <= 20) {
            classCode = "level-medium";
        }
        else {
            classCode = "level-high";
        }

        itemsRedacted.push(
            <div className="item" key={items[i].listing_id}>
                <div className="item-image">
                    <a href={items[i].url}>
                        <img src={items[i].MainImage.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{displayedTitle}</p>
                    <p className="item-price">{displayedPrice}</p>
                    <p className={"item-quantity " + classCode}>12 left</p>
                </div>
            </div>
        );
    }

    return (
        <div className="item-list">
            {itemsRedacted}
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.array
}

Listing.defaultProps = {
    items: []
};

export default Listing;
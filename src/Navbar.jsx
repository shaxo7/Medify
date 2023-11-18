import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [isHomeMedicalSuppliesDropdownVisible, setHomeMedicalSuppliesDropdownVisible] = useState(false);

  const handleProductsDropdownToggle = () => {
    setProductsDropdownVisible(!isProductsDropdownVisible);
  };

  const handleHomeMedicalSuppliesDropdownToggle = () => {
    setHomeMedicalSuppliesDropdownVisible(!isHomeMedicalSuppliesDropdownVisible);
  };

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
    "Category 11",
    "Category 12",
    "Category 13",
    "Category 14",
    "Category 15",
    "Category 16",
    "Category 17",
    "Category 18",
    "Category 19",
    "Category 20",
    "Category 21",
    "Category 22",
    "Category 23",
    "Category 24",
    "Category 25",
    "Category 26",
    "Category 27",
    "Category 28",
    "Category 29",
    "Category 30",
    "Category 31",
    "Category 32",
    "Category 33",
    "Category 34",
    "Category 35",
    "Category 36",
    "Category 37",
    "Category 38",
    "Category 39",
    "Category 40",
    "Category 41",
    "Category 42",
    "Category 43",
    "Category 44",
    "Category 45",
    "Category 46",
    "Category 47",
    "Category 48",
  ];

  const columns = 6; 
  const rows = 8;   

  const itemsPerColumn = categories.length / columns;
  const itemsPerRow = categories.length / rows;

  const categoryColumns = Array.from({ length: columns }, (_, columnIndex) =>
    categories.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
  );

    return (
      <nav>
        <div className="navbar">
          <div className="left-content">
            <ul>
              <li
                onMouseEnter={handleProductsDropdownToggle}
                onMouseLeave={handleProductsDropdownToggle}
              >
                <Link to="/">
                  <AiOutlineMenu className='outline-icon'/>
                  Products
                </Link>
                {isProductsDropdownVisible && (
                  <div className="dropdown-content">
                    {Array.from({ length: rows }, (_, rowIndex) => (
                      <ul key={rowIndex}>
                        {categoryColumns.map((column, columnIndex) => (
                          <li key={columnIndex}>
                            <a href={`/category${rowIndex * columns + columnIndex + 1}`}>
                              {column[rowIndex]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </li>
              <li
              onMouseEnter={handleHomeMedicalSuppliesDropdownToggle}
              onMouseLeave={handleHomeMedicalSuppliesDropdownToggle}
              >
                <Link to="/HomeMedicalSupplies">
                  Home Medical Supplies
                </Link>
                {isHomeMedicalSuppliesDropdownVisible && (
                  <div className="dropdown-content">

                    {categories.slice(0, 15).map((category, index) => (
                      <li key={index}>
                        <a className="list-hp"href={`/homemedicalsupply${index + 1}`}>
                          {category}
                        </a>
                      </li>
                    ))}
                  </div>
                )}
              </li>
              <li><Link to="/Homepages">Homepages</Link></li>
              <li><Link to="/Shop">Shop</Link></li>
              <li><Link to="/Pages">Pages</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="right-content">
            Need help? 0020 500 - MYMEDI - 000
          </div>
        </div>
        <hr className='horizontal-line'/>
      </nav>
      
    );
  }

  export default Navbar;
  
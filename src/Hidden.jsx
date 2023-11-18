import { useState, useEffect } from "react";
function Hidden(){
    const [isAppVisible, setAppVisible] = useState(true);

    useEffect(() => {
      const isAppVisibleStored = localStorage.getItem('isAppVisible');
      if (isAppVisibleStored === 'true') {
        setAppVisible(false);
      }
    }, []);
  
    const handleCloseApp = () => {
      setAppVisible(false);
      localStorage.setItem('isAppVisible', 'false');
    };
  
    const handleShowApp = () => {
      setAppVisible(true);
      localStorage.setItem('isAppVisible', 'true');
    };
  
    return (
      <div className="app-wrapper">
        {isAppVisible && (
          <div className='App'>
            <div className='top-head'>
              Due to the <strong>COVID-19</strong> epidemic, orders may be processed with a slight delay
            </div>
          </div>
        )}
        <div className='x-symbol' onClick={isAppVisible ? handleCloseApp : handleShowApp}>
          {isAppVisible ? 'x' : '<-'} 
        </div>
    </div>
    );
        }
export default Hidden;
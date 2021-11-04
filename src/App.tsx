import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CompanyDetail from './components/company-detail';
import CompanyList from './components/company-list';
import { AutoComplete } from 'primereact/autocomplete';
import { TabView, TabPanel } from 'primereact/tabview';

function App() {
  const [selectedCountry1, setSelectedCountry1] = useState<any>(null);
  const [countries, setCountries] = useState<any>([]);
  const [filteredCountries, setFilteredCountries] = useState<any>(null);

  useEffect(() => {
    setCountries([
      { "name": "Afghanistan", "code": "AF" },
      { "name": "Åland Islands", "code": "AX" },
      { "name": "Albania", "code": "AL" },
      { "name": "Algeria", "code": "DZ" },
      { "name": "American Samoa", "code": "AS" },
      { "name": "Andorra", "code": "AD" }]);
  }, []);


  const searchCountry = (event: { query: string }) => {
    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      }
      else {
        _filteredCountries = countries.filter((country: any) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setFilteredCountries(_filteredCountries);
    }, 250);
  }

  return (
    <Router>
      <div className="wrapper">
        <div className="wrapper-container">
          <div className="menu-wrapper p-grid p-shadow-3">
            <div className="p-col-8">
              <Link className="logo" to='/'>
                <img src="/images/logo.PNG" alt="logo" />
              </Link>
            </div>
            <div className="p-col-4">
              <div className="search-wrapper">
                <div className="p-inputgroup">
                  <AutoComplete
                    value={selectedCountry1}
                    suggestions={filteredCountries}
                    placeholder = "Tìm kiếm công ty"
                    completeMethod={searchCountry}
                    field="name" onChange={(e) => setSelectedCountry1(e.value)} />
                  <Button icon="pi pi-search" className="p-button-outlined" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <Switch>
              <Route path="/" exact>
                <div className="p-grid">
                  <div className="p-col-12 p-md-9">
                    <TabView className="tabview-custom">
                      <TabPanel header="Mới cập nhật" leftIcon="pi pi-clock">
                        <CompanyList />
                      </TabPanel>
                      <TabPanel header="Công ty xịn" leftIcon="pi pi-thumbs-up">
                        <CompanyList />
                      </TabPanel>
                      <TabPanel header="Công ty xấu" leftIcon="pi pi-thumbs-down">
                        <CompanyList />
                      </TabPanel>
                    </TabView>
                  </div>
                  <div className="p-col-0 p-md-3">
                    <h5>Nhận xét gần đây</h5>
                  </div>
                </div>
              </Route>
              <Route path="/company/:id">
                <CompanyDetail />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Version } from '@microsoft/sp-core-library';
// import * as jQuery from 'jquery';
// import * as bootstrap from 'bootstrap'
import { SPComponentLoader } from '@microsoft/sp-loader';
// import 'jquery';
// require('bootstrap');
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './BonusRequeustFormWebPart.module.scss';
import * as strings from 'BonusRequeustFormWebPartStrings';

export interface IBonusRequeustFormWebPartProps {
  description: string;
}

export default class BonusRequeustFormWebPart extends BaseClientSideWebPart<IBonusRequeustFormWebPartProps> {

  public render(): void {
    let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
   SPComponentLoader.loadCss(cssURL);
    this.domElement.innerHTML = `
  
    <div class="${ styles.bonusRequeustForm }">
      <h1 class="${styles.brand}"><span>Acme</span> Human Resources Authority</h1>
    <div class="${styles.wrapper}">
        <div class="${styles.company_info}">
            <h3> Bonus Request EService</h3>
           
        </div>
   
       <div class=" ${styles.contact_form}">
      
        <p>
            <label for="requestor-name">Requestor Name</label>
            <input type="text" name="requestor-name">
        </p>
        <p>
            <label for="requestor-job">Requestor Job</label>
            <input type="text" name="requestor-job">
        </p>
        <p>
            <label for="entity-name">Entity Name</label>
            <input type="text" name="entity-name">
        </p>
        <p>
            <label for="requestor-dept">Requestor Department</label>
            <input type="requestor-dept" name="requestor-dept">
        </p>
        <p>
            <label for="coordinator-name">Coordinator Name</label>
            <input name="coordinator-name" type="text">
        </p>
        <p>
            <label for="contact-number">Contact Numbers</label>
            <input name="contact-number" type="text">
        </p>
        <p>
            <label for="email">Contact Numbers</label>
            <input name="email" type="text">
        </p>
        <p class="full">
                <button>Submit</button>
                
            </p>
       
      </div>
      </div>
      </div>
      `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

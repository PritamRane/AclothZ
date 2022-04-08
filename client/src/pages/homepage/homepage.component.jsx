import React from "react";
import Directory from "../../components/directory/directory.component";
import Footer from '../../components/footer/footer.component';

import { HomePage, H1 } from "./homepage.style";

export default function homepage() {
  return (
    <div>
    <HomePage>
      <H1></H1>
      <Directory />
    </HomePage>
    <Footer />
    </div>
    
    
  );
}

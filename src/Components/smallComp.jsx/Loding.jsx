import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
   
     
     <Stack className={styles.mainLoadCSS}  >
         <div className={styles.loadingCSS} >
           <img
             width="100%"
             src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
             alt="loading..."
             />

         </div>
      </Stack>

  );



};

export default Loading;

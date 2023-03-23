<template>
    <div>
      <header>
        <img src="../assets/Group2.png" />
        <div class="nav-menu">
          <NavLinks :NavContent="NavigationContent.Links"/>
        </div>
        <div class="profile">
          <div class="profile-settings">
              <img src="../assets/settings.png">
          </div>
          <div class="profile-image">
              <img src="../assets/Ellipse.png" alt="profile">
          </div>
      </div>
      </header>
    </div>
  </template>
  
  <script>
      import NavigationContent from "../Navigation-Content.json"
      import NavLinks from "../components/NavLinks.vue"
      export default {
      components: {
          NavLinks
      },
      data(){
          return{
              NavigationContent:NavigationContent
          }
      }
  };
  </script>
  
  <style scoped>
      header{
      width: 100%; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      }
  
      .profile{
          width: 120px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
      }
  
      .profile-image img{
          width: 36px;
          height: 36px;
      }
  
      .nav-menu{
          width: 60%;
      }
  </style>
<script>
  import "uikit/dist/css/uikit.css";
  import "uikit/dist/js/uikit";
  import LargeUiShell from "./lib/components/LargeUIShell.svelte";
  import SideNav from "./lib/components/SideNav.svelte";
  // import "feather-icons/dist/feather.js";
  import TopNav from "./lib/components/TopNav.svelte";
  import { Router, Route } from "svelte-routing";
  import BrowseClasses from "./pages/BrowseClasses.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import MyClasses from "./pages/MyClasses.svelte";
  import MyProfile from "./pages/MyProfile.svelte";
  import Notes from "./pages/Notes.svelte";
  import Wallet from "./pages/Wallet.svelte";
  export let url = "";
</script>

<Router {url}>
  <LargeUiShell>
    <div class="uk-height-1-1" slot="sidenav">
      <SideNav />
    </div>
    <span slot="main">
      <TopNav />

      <div>
        <Route path="classes/browse" component={BrowseClasses} />
        <Route path="classes/notes" component={Notes} />
        <Route path="classes" component={MyClasses} />
        <Route path="profile/wallet" component={Wallet} />
        <Route path="profile" component={MyProfile} />
        <Route path="/"><Dashboard /></Route>
      </div>
    </span>
  </LargeUiShell>
</Router>

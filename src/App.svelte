<script>
  import "uikit/dist/css/uikit.css";
  import "uikit/dist/js/uikit";
  import LargeUiShell from "./lib/components/LargeUIShell.svelte";
  import SideNav from "./lib/components/SideNav.svelte";
  import TopNav from "./lib/components/TopNav.svelte";
  import { Router, Route } from "svelte-routing";
  import BrowseClasses from "./pages/BrowseClasses.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import MyCalendar from "./pages/MyCalendar.svelte";
  import MyProfile from "./pages/MyProfile.svelte";
  import Notes from "./pages/Notes.svelte";
  import Wallet from "./pages/Wallet.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsPhoneLandscape from "svelte-icons-pack/bs/BsPhoneLandscape";
  import MyReviews from "./pages/MyReviews.svelte";
  export let url = "";
  let innerWidth;
  let innerHeight;
  let isLandscape = true;
  if (window.innerHeight > window.innerWidth) {
    isLandscape = false;
  }
  window.addEventListener("resize", function (event) {
    if (window.innerHeight > window.innerWidth) {
      isLandscape = false;
      return;
    }
    isLandscape = true;
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />
{#if isLandscape}
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
          <Route path="classes/reviews" component={MyReviews} />
          <Route path="calendar" component={MyCalendar} />
          <Route path="profile/wallet" component={Wallet} />
          <Route path="profile" component={MyProfile} />
          <Route path="/"><Dashboard /></Route>
        </div>
      </span>
    </LargeUiShell>
  </Router>
{:else}
  <div
    class="uk-child-width-expand@s uk-text-center"
    style="height: 100vh;"
    uk-grid
  >
    <div>
      <div
        class="uk-card uk-card-default uk-height-1-1 uk-card-body uk-background-secondary uk-text-danger uk-text-large uk-padding-large-top"
      >
        <p class="uk-margin-large-top">
          Please use the device in landscape mode.
        </p>
        <br />
        <span>
          <Icon src={BsPhoneLandscape} size="5rem" color="#f0506e" />
        </span>
      </div>
    </div>
  </div>
{/if}

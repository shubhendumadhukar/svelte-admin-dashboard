<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiBell from "svelte-icons-pack/fi/FiBell";
    import FiMail from "svelte-icons-pack/fi/FiMail";
    import FiUser from "svelte-icons-pack/fi/FiUser";
    import FaSolidHamburger from "svelte-icons-pack/fa/FaSolidHamburger";
</script>

<nav class="uk-padding-small uk-border-rounded" uk-navbar>
    <div class="uk-navbar-left">
        <div class="uk-border-rounded uk-box-shadow-small">
            <form class="uk-search uk-search-navbar">
                <span uk-search-icon />
                <input
                    class="uk-search-input uk-form-danger"
                    type="search"
                    placeholder="Search"
                />
            </form>
        </div>
    </div>

    <div class="uk-navbar-right uk-visible@l">
        <Icon size="26px" src={FiBell} />
        <Icon size="26px" src={FiMail} />
        <Icon size="26px" src={FiUser} />
        <div class="uk-flex uk-flex-column">
            <span>Shubhendu Madhukar</span>
            <span class="uk-text-meta">TEACHER</span>
        </div>
    </div>
    <div class="uk-navbar-right uk-hidden@l">
        <button
            class="menu uk-button uk-button-default"
            uk-toggle="target: #sliding-menu"
        >
            <Icon size="26px" color="#f0506e" src={FaSolidHamburger} />
        </button>
    </div>
</nav>
<div id="sliding-menu" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="/">Active</a></li>
            <li class="uk-parent">
                <a href="/">Parent</a>
                <ul class="uk-nav-sub">
                    <li><a href="/">Sub item</a></li>
                    <li><a href="/">Sub item</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li>
                <a href="/"
                    ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: table"
                    /> Item</a
                >
            </li>
            <li>
                <a href="/"
                    ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: thumbnails"
                    /> Item</a
                >
            </li>
            <li class="uk-nav-divider" />
            <li>
                <a href="/"
                    ><span
                        class="uk-margin-small-right"
                        uk-icon="icon: trash"
                    /> Item</a
                >
            </li>
        </ul>
    </div>
</div>

<style>
    nav {
        background-color: white;
    }
    .menu {
        border: none;
    }
    #sliding-menu {
        color: black;
    }
</style>

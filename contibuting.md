



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>icenium-cli/CONTRIBUTING.md at master · Icenium/icenium-cli</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Icenium/icenium-cli" name="twitter:title" /><meta content="icenium-cli - Cross Platform Command Line Interface for Telerik AppBuilder" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1152554?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1152554?v=3&amp;s=400" property="og:image" /><meta content="Icenium/icenium-cli" property="og:title" /><meta content="https://github.com/Icenium/icenium-cli" property="og:url" /><meta content="icenium-cli - Cross Platform Command Line Interface for Telerik AppBuilder" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NjQ1NTEwNjpiOTdlMjBkNzM4ODMyOWQ2Nzg0NmZhNmE4MTYwZGQ5NjplOTg2YWY2YTMyNjUzMzY2NjUwN2U0YjI3MmU0MTEzZjBmOWU5ZWJhMDQyNWI0Nzc0Mzg1MDBlODJmZGIxNGY3--527e2855c6e3d77af5e7679866fb3c9248f5dd59">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="324EFAC5:09AE:260F7C97:564D14FA" name="octolytics-dimension-request_id" /><meta content="6455106" name="octolytics-actor-id" /><meta content="sbschase" name="octolytics-actor-login" /><meta content="788e3b4afdf9ec7bca26ac2b833cf7573603155d512220b118d1a7bd8e73afc9" name="octolytics-actor-hash" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="sbschase">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="3271707cd6fba58f4ca39020ede1abdb15f6f104" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ceefdafe87b6f218cd93adcaec6a8878ed1f959f7f5937d308b4b0f6b251a7a0.css" integrity="sha256-zu/a/oe28hjNk63K7GqIeO0flZ9/WTfTCLSw9rJRp6A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-7048b51d8e88507e1babbe42418137bac3f5ef75f4b1957242327b23ebacd292.css" integrity="sha256-cEi1HY6IUH4bq75CQYE3usP173X0sZVyQjJ7I+us0pI=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="4d4367b1adcd44808937b8e9a8c65f0b">

      
  <meta name="description" content="icenium-cli - Cross Platform Command Line Interface for Telerik AppBuilder">
  <meta name="go-import" content="github.com/Icenium/icenium-cli git https://github.com/Icenium/icenium-cli.git">

  <meta content="1152554" name="octolytics-dimension-user_id" /><meta content="Icenium" name="octolytics-dimension-user_login" /><meta content="14398834" name="octolytics-dimension-repository_id" /><meta content="Icenium/icenium-cli" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14398834" name="octolytics-dimension-repository_network_root_id" /><meta content="Icenium/icenium-cli" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Icenium/icenium-cli/commits/master.atom" rel="alternate" title="Recent Commits to icenium-cli:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Icenium/icenium-cli/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Icenium/icenium-cli/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:sbschase"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Icenium/icenium-cli">This repository</span>
  </div>
    <a class="dropdown-item" href="/Icenium/icenium-cli/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/sbschase"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@sbschase" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6455106?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">sbschase</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/sbschase" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+A8BwulNZNPKoTMArSymkG9vjoXmRmpoACd7ad5opBbgxpxxDpamrJOeftcMMzeOcZebRKVnnAEueCA/gEwOgw==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Fvll194hiRyH23AOFk/1DLxAOrRGz4a41z02FFqXgDLgRqq+rLO7eXj2wbrqX2B3ZS67QtG9WQr4QiiklhPglQ==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="14398834" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Icenium/icenium-cli/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/Icenium/icenium-cli/watchers">
            52
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Icenium/icenium-cli/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sLD1/zjw7bB0DBDjkGg61t4/jvS0N/B5zf9bworu9VjRmXoWuMAJX55BIEh6s+iCQFDgj0JlTUMjrOqDpeGF1g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Icenium/icenium-cli"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Icenium/icenium-cli/stargazers">
          24
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Icenium/icenium-cli/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="l6WGxFBZLry0rzOCOeyYTdDVxxa1u0i00lihqCPA9BivLrsvrrCP/WBXrY2TnVpduK6gcCV2WdKO7eW3SubQxw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Icenium/icenium-cli"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Icenium/icenium-cli/stargazers">
          24
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of Icenium/icenium-cli to your account"
              aria-label="Fork your own copy of Icenium/icenium-cli to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/Icenium/icenium-cli/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/Icenium/icenium-cli/network" class="social-count">
      6
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/Icenium" class="url fn" itemprop="url" rel="author"><span itemprop="title">Icenium</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/Icenium/icenium-cli" data-pjax="#js-repo-pjax-container">icenium-cli</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/Icenium/icenium-cli/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/Icenium/icenium-cli" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Icenium/icenium-cli">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/Icenium/icenium-cli/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Icenium/icenium-cli/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/Icenium/icenium-cli/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /Icenium/icenium-cli/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/Icenium/icenium-cli/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /Icenium/icenium-cli/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/Icenium/icenium-cli/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /Icenium/icenium-cli/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/Icenium/icenium-cli/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /Icenium/icenium-cli/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Icenium/icenium-cli.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small text-muted"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:Icenium/icenium-cli.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Icenium/icenium-cli" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="wF/y7gR2sOHMdTsifZvdko3rfpabDeWiIepGzjPDX+tZrQxqWCmceBPxEe3yJDIOu50VNtdZDkXFFmcnDIJTuQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vFlwjZ+lB5tVDi14DBJKBZvHUZW1LX2U374hHTN1F4ZddLBTp3NhHecVnAliARSCenNZPytxojGkQ6n3sIwV1g==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OAuCrJG7eNZUp0NADiZoY2C5Jp2EmNqmQ8zfD6f4pLZDpke7BVWhx/aruy/hEyNeCSCPkJtkoI70XXHfQLRryg==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="github-windows://openRepo/https://github.com/Icenium/icenium-cli" class="btn btn-sm sidebar-button" title="Save Icenium/icenium-cli to your computer and use it in GitHub Desktop." aria-label="Save Icenium/icenium-cli to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/Icenium/icenium-cli/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of Icenium/icenium-cli as a zip file"
                 title="Download the contents of Icenium/icenium-cli as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/Icenium/icenium-cli/blob/1b58da0484e165ef7e374db87a9f94e0e409d6c9/CONTRIBUTING.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ad11681fb02c98f859258156b196f01b -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/appbuilder-2.8.1/CONTRIBUTING.md"
               data-name="appbuilder-2.8.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="appbuilder-2.8.1">
                appbuilder-2.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/fatme/support-for-conditional-httprequest/CONTRIBUTING.md"
               data-name="fatme/support-for-conditional-httprequest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/support-for-conditional-httprequest">
                fatme/support-for-conditional-httprequest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/fatme/usbmux-communicator/CONTRIBUTING.md"
               data-name="fatme/usbmux-communicator"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/usbmux-communicator">
                fatme/usbmux-communicator
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Icenium/icenium-cli/blob/master/CONTRIBUTING.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/nedyalkov/cd/CONTRIBUTING.md"
               data-name="nedyalkov/cd"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="nedyalkov/cd">
                nedyalkov/cd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/paletov/gen-service-proxy/CONTRIBUTING.md"
               data-name="paletov/gen-service-proxy"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="paletov/gen-service-proxy">
                paletov/gen-service-proxy
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/release-2.14.1/CONTRIBUTING.md"
               data-name="release-2.14.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release-2.14.1">
                release-2.14.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/release/CONTRIBUTING.md"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/sd/watch-hook/CONTRIBUTING.md"
               data-name="sd/watch-hook"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="sd/watch-hook">
                sd/watch-hook
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/totev/cd/CONTRIBUTING.md"
               data-name="totev/cd"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/cd">
                totev/cd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/totev/qr-code-fix/CONTRIBUTING.md"
               data-name="totev/qr-code-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/qr-code-fix">
                totev/qr-code-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/totev/remove-websites/CONTRIBUTING.md"
               data-name="totev/remove-websites"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/remove-websites">
                totev/remove-websites
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/vladimirov/find-top-npm-packs/CONTRIBUTING.md"
               data-name="vladimirov/find-top-npm-packs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="vladimirov/find-top-npm-packs">
                vladimirov/find-top-npm-packs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Icenium/icenium-cli/blob/vladimirov/ns-plugins-tests/CONTRIBUTING.md"
               data-name="vladimirov/ns-plugins-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="vladimirov/ns-plugins-tests">
                vladimirov/ns-plugins-tests
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.14.1/CONTRIBUTING.md"
                 data-name="v2.14.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.14.1">v2.14.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.14.0/CONTRIBUTING.md"
                 data-name="v2.14.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.14.0">v2.14.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.12.1/CONTRIBUTING.md"
                 data-name="v2.12.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.12.1">v2.12.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.12.0/CONTRIBUTING.md"
                 data-name="v2.12.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.12.0">v2.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.11.3/CONTRIBUTING.md"
                 data-name="v2.11.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.11.3">v2.11.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.11.1/CONTRIBUTING.md"
                 data-name="v2.11.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.11.1">v2.11.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.11.0/CONTRIBUTING.md"
                 data-name="v2.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.11.0">v2.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.10.1/CONTRIBUTING.md"
                 data-name="v2.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.10.1">v2.10.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.10.0/CONTRIBUTING.md"
                 data-name="v2.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.10.0">v2.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.9.3/CONTRIBUTING.md"
                 data-name="v2.9.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.9.3">v2.9.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.9.2/CONTRIBUTING.md"
                 data-name="v2.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.9.2">v2.9.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.9.1/CONTRIBUTING.md"
                 data-name="v2.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.9.1">v2.9.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.9/CONTRIBUTING.md"
                 data-name="v2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.9">v2.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.8.3/CONTRIBUTING.md"
                 data-name="v2.8.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.8.3">v2.8.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.7.0/CONTRIBUTING.md"
                 data-name="v2.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.7.0">v2.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.6.2/CONTRIBUTING.md"
                 data-name="v2.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.6.2">v2.6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.6.1/CONTRIBUTING.md"
                 data-name="v2.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.6.1">v2.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.6/CONTRIBUTING.md"
                 data-name="v2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.6">v2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.5.1/CONTRIBUTING.md"
                 data-name="v2.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.5.1">v2.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.5/CONTRIBUTING.md"
                 data-name="v2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.5">v2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.4/CONTRIBUTING.md"
                 data-name="v2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.4">v2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.3.1/CONTRIBUTING.md"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.3/CONTRIBUTING.md"
                 data-name="v2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3">v2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.2/CONTRIBUTING.md"
                 data-name="v2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2">v2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.1.1/CONTRIBUTING.md"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.1.0/CONTRIBUTING.md"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/v2.0.0/CONTRIBUTING.md"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/onprem-v1.0/CONTRIBUTING.md"
                 data-name="onprem-v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="onprem-v1.0">onprem-v1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/ONPREMv2015R1/CONTRIBUTING.md"
                 data-name="ONPREMv2015R1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="ONPREMv2015R1">ONPREMv2015R1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/2.8.1-fix/CONTRIBUTING.md"
                 data-name="2.8.1-fix"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.8.1-fix">2.8.1-fix</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/2.1.0/CONTRIBUTING.md"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Icenium/icenium-cli/tree/2.0.0/CONTRIBUTING.md"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/Icenium/icenium-cli/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Icenium/icenium-cli" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">icenium-cli</span></a></span></span><span class="separator">/</span><strong class="final-path">CONTRIBUTING.md</strong>
    </div>
  </div>

<include-fragment class="commit-tease" src="/Icenium/icenium-cli/contributors/master/CONTRIBUTING.md">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Icenium/icenium-cli/raw/master/CONTRIBUTING.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Icenium/icenium-cli/blame/master/CONTRIBUTING.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Icenium/icenium-cli/commits/master/CONTRIBUTING.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/Icenium/icenium-cli?branch=master&amp;filepath=CONTRIBUTING.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Icenium/icenium-cli/edit/master/CONTRIBUTING.md" class="inline-form js-update-url-with-hash" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LCdznI/0B4p4iiUc3z+QOkBxpAye4cZgzFhhOY/4IRqKwDoOIfQVl+dIBdsaykzkit4iGAgxdvxoS/KRiSrysg==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Icenium/icenium-cli/delete/master/CONTRIBUTING.md" class="inline-form" data-form-nonce="3271707cd6fba58f4ca39020ede1abdb15f6f104" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pB2WCh3trow15SUazunmnhd5UerqwZkiNbg3ohMdpK+KYNqgKatkE0s9UdoF8Px/5RtZcIV+Syvaw1MHbPwTyw==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      109 lines (91 sloc)
      <span class="file-info-divider"></span>
    4.97 KB
  </div>
</div>

  
  <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-contribute-to-the-telerik-appbuilder-command-line-interface" class="anchor" href="#contribute-to-the-telerik-appbuilder-command-line-interface" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contribute to the Telerik AppBuilder Command-Line Interface</h1>

<p><em>Help us improve the Telerik AppBuilder CLI</em> </p>

<p><a href="http://www.telerik.com/appbuilder" title="The Telerik AppBuilder web site"><img src="https://camo.githubusercontent.com/03a12c1b956de3c06b6fafd31865096bfa4d15df/68747470733a2f2f7261772e6769746875622e636f6d2f4963656e69756d2f6963656e69756d2d636c692f72656c656173652f61622d6c6f676f2e706e67" alt="Telerik AppBuilder" title="Telerik AppBuilder" data-canonical-src="https://raw.github.com/Icenium/icenium-cli/release/ab-logo.png" style="max-width:100%;"></a></p>

<p>The Telerik AppBuilder CLI lets you build, test, deploy, and publish hybrid mobile apps for iOS, Android, and Windows Phone 8 from your favorite IDE or code editor. You can develop your projects locally from the convenience of your favorite code editor and run the command-line to test, build, deploy in the simulator or on devices, and publish your applications to the App Store or Google Play.</p>

<ul>
<li><a href="#bug" title="Learn how to report an issue">Report an Issue</a></li>
<li><a href="#request" title="Learn how to submit a feature or improvement request">Request a Feature</a></li>
<li><a href="#contribute" title="Learn how to submit your own improvements to the code">Contribute to the Code Base</a></li>
</ul>

<h1><a id="user-content-report-an-issue" class="anchor" href="#report-an-issue" aria-hidden="true"><span class="octicon octicon-link"></span></a>Report an Issue</h1>

<p>If you find a bug in the source code or a mistake in the documentation, you can submit an issue to our <a href="https://github.com/Icenium/icenium-cli">GitHub Repository</a>.
Before you submit your issue, search the archive to check if a similar issues has been logged or addressed. This will let us focus on fixing issues and adding new features.
If your issue appears to be a bug, and hasn't been reported, open a new issue. To help us investigate your issue and respond in a timely manner, you can provide is with the following details.</p>

<ul>
<li><strong>Overview of the issue:</strong> Provide a short description of the visible symptoms. If applicable, include error messages, screen shots, and stack traces.</li>
<li><strong>Motivation for or use case:</strong> Let us know how this particular issue affects your work.</li>
<li><strong>Telerik AppBuilder version(s):</strong> List the current version and build number of the CLI interface. You can get it by running <code>$ appbuilder --version</code>. Let us know if you have not observed this behavior in earlier versions and if you consider it a regression.</li>
<li><strong>System configuration:</strong> Provide us with relevant system configuration information such as operating system, network connection, proxy usage, etc. Let us know if you have been able to reproduce the issue on multiple setups.</li>
<li><strong>Steps to reproduce:</strong> If applicable, submit a step-by-step walkthrough of how to reproduce the issue.</li>
<li><strong>Related issues:</strong> If you discover a similar issue in our archive, give us a heads up - it might help us identify the culprit.</li>
<li><strong>Suggest a fix:</strong> You are welcome to suggest a bug fix or pinpoint the line of code or the commit that you believe has introduced the issue.</li>
</ul>

<p><a href="#contribute-to-the-telerik-appbuilder-command-line-interface">Back to Top</a></p>

<h1><a id="user-content-request-a-feature" class="anchor" href="#request-a-feature" aria-hidden="true"><span class="octicon octicon-link"></span></a>Request a Feature</h1>

<p>You can request a new feature by submitting an issue with the <em>enhancement</em> label to our <a href="https://github.com/Icenium/icenium-cli">GitHub Repository</a>.
If you want to implement a new feature yourself, consider submitting it to the <a href="https://github.com/Icenium/icenium-cli">GitHub Repository</a> as a Pull Request.</p>

<p><a href="#contribute-to-the-telerik-appbuilder-command-line-interface">Back to Top</a></p>

<h1><a id="user-content-contribute-to-the-code-base" class="anchor" href="#contribute-to-the-code-base" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contribute to the Code Base</h1>

<p>First, read our <a href="https://github.com/Icenium/icenium-cli/blob/master/for-developers.md">developers documentation</a>.</p>

<p>Before you submit a Pull Request, consider the following guidelines.</p>

<ul>
<li>Search <a href="https://github.com/Icenium/icenium-cli/pulls">GitHub</a> for an open or closed Pull Request that relates to your submission.</li>
<li>Clone the repository.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git clone git@github.com:Icenium/icenium-cli.git</pre></div>

<ul>
<li>Initialize the submodule.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git submodule init</pre></div>

<ul>
<li>Fetch data from the submodule.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git submodule update</pre></div>

<ul>
<li>Make your changes in a new <code>git</code> branch. We use the <a href="http://nvie.com/posts/a-successful-git-branching-model/">Gitflow branching model</a> so you will have to branch from our master branch.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git checkout -b my-fix-branch master</pre></div>

<ul>
<li>Create your patch and include appropriate test cases.</li>
<li>Build your changes locally.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    grunt</pre></div>

<ul>
<li>Ensure all the tests pass.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    grunt ts:devall
    npm <span class="pl-c1">test</span></pre></div>

<ul>
<li>Commit your changes and create a descriptive commit message (the commit message is used to generate release notes).</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git commit -a</pre></div>

<ul>
<li>Push your branch to GitHub.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git push origin my-fix-branch</pre></div>

<ul>
<li>In GitHub, send a Pull Request to icenium-cli:master.</li>
<li>If we suggest changes, you can modify your branch, rebase, and force a new push to your GitHub repository to update the Pull Request.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git rebase master -i
    git push -f</pre></div>

<p>That's it! Thank you for your contribution!</p>

<p>When the patch is reviewed and merged, you can safely delete your branch and pull the changes from the main (upstream) repository.</p>

<ul>
<li>Delete the remote branch on GitHub.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git push origin --delete my-fix-branch</pre></div>

<ul>
<li>Check out the master branch.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git checkout master -f</pre></div>

<ul>
<li>Delete the local branch.</li>
</ul>

<div class="highlight highlight-source-shell"><pre>    git branch -D my-fix-branch</pre></div>

<ul>
<li>Update your master branch with the latest upstream version.</li>
</ul>

<pre><code>    git pull --ff upstream master
</code></pre>

<p><a href="#contribute-to-the-telerik-appbuilder-command-line-interface">Back to Top</a></p>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.11931s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-fRgMK7V3nst6tdBM6K+ZnnODbc8N8ajES2nGKh3gcy8=" src="https://assets-cdn.github.com/assets/frameworks-7d180c2bb5779ecb7ab5d04ce8af999e73836dcf0df1a8c44b69c62a1de0732f.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-QST6NPggz8DtJRm0iLYLm1R9lqaOTe1O/g1nNdw/zvI=" src="https://assets-cdn.github.com/assets/github-4124fa34f820cfc0ed2519b488b60b9b547d96a68e4ded4efe0d6735dc3fcef2.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>


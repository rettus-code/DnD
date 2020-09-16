import React from 'react';


export default function Header() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Explore Eberron</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sharn">Sharn</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/setting">Setting</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Heroes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/Apok">Silent Statue</a>
          <a class="dropdown-item" href="/Silvertone">Mike McSilvertone</a>
          {/* <a class="dropdown-item" href={Keys}>Orc Pirate</a>
          <a class="dropdown-item" href={Rettus}>Goblin Pack</a>
          <a class="dropdown-item" href={Megan}>Confused Artificer</a>
          <a class="dropdown-item" href={Josh}>Unhelpful Cleric</a>
          <a class="dropdown-item" href={Lym}>Dizzy Sorcerer</a>
          <a class="dropdown-item" href={Joe}>Light Fingers</a> */}
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

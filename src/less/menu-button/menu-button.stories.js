export default { title: 'menu-button' };

export const defaultSizeDefaultItems = () => `
<div class="demo" style="margin-bottom: 100px">
    <div class="demo__inner">
        <span class="menu-button">
            <button class="expand-btn" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 10000</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button">
            <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem" tabindex="0">
                        <span>Item 10000</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeRadioItems = () => `
<div class="demo" style="margin-bottom: 100px">
    <div class="demo__inner">
        <span class="menu-button">
            <button class="expand-btn" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemradio">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true" aria-checked="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemradio">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button">
            <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemradio">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeCheckboxItems = () => `
<div class="demo" style="margin-bottom: 100px">
    <div class="demo__inner">
        <span class="menu-button">
            <button class="expand-btn" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemcheckbox">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true" aria-checked="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemcheckbox">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button">
            <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemcheckbox" tabindex="0" aria-checked="true">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemcheckbox">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeDefaultItemsInheritColourPurple = () => `
<div class="demo" style="margin-bottom: 100px">
    <div class="demo__inner">
        <span class="menu-button" style="color: purple">
            <button class="expand-btn" aria-expanded="false" aria-haspopup="true" style="background-color: #6a29b9; color: white" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem" tabindex="0">
                        <span>Item 10000</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button" style="color: purple">
            <button class="expand-btn" aria-expanded="true" aria-haspopup="true" style="background-color: #6a29b9; color: white" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem" tabindex="0">
                        <span>Item 10000</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeDefaultItemsLongItemText = () => `
<div class="demo" style="margin-bottom: 100px">
    <div class="demo__inner">
        <span class="menu-button">
            <button class="expand-btn" type="button" aria-expanded="false" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem" tabindex="0">
                        <span>Item 1 with a very very very long string</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button">
            <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem" tabindex="0">
                        <span>Item 1 with a very very very long string</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Item 20000</span>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeDefaultItemsInheritFontSize200Percent = () => `
<div class="demo" style="margin-bottom: 150px">
    <div class="demo__inner">
        <span class="menu-button" style="font-size: 200%">
            <button class="expand-btn" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemradio" aria-checked="true">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemradio">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button" style="font-size: 200%">
            <button class="expand-btn" type="button" aria-expanded="true" aria-haspopup="true">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitemradio" tabindex="0" aria-checked="true">
                        <span>Item 10000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                    <div class="menu-button__item" role="menuitemradio">
                        <span>Item 20000</span>
                        <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                            <use xlink:href="#icon-tick-small"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeFixWidth = () => `
<div class="demo" style="margin-bottom: 150px">
    <div class="demo__inner">
        <span class="menu-button">
            <button class="expand-btn" aria-expanded="false" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu menu-button__menu--fix-width">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 1 with a long string</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 2</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 3</span>
                    </div>
                </div>
            </div>
        </span>
        <span class="menu-button">
            <button class="expand-btn" aria-expanded="true" aria-haspopup="true" type="button">
                <span class="expand-btn__cell">
                    <span class="expand-btn__text">Button</span>
                    <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </span>
            </button>
            <div class="menu-button__menu menu-button__menu--fix-width">
                <div class="menu-button__items" role="menu">
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 1 with a long string</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 2</span>
                    </div>
                    <div class="menu-button__item" role="menuitem">
                        <span>Menu Item 3</span>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>
`;

export const defaultSizeLinksFixWidth = () => `
<span class="fake-menu-button">
    <button class="expand-btn" aria-expanded="false" aria-haspopup="true" type="button">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu fake-menu-button__menu--fix-width">
        <li>
            <a class="fake-menu-button__item" href="http://www.ebay.com" aria-current="page">
                <span>Link 10000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 20000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 30000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 40000</span>
            </a>
        </li>
    </ul>
</span>
<span class="fake-menu-button">
    <button class="expand-btn" aria-expanded="true" aria-haspopup="true" type="button">
        <span class="expand-btn__cell">
            <span class="expand-btn__text">Button</span>
            <svg class="icon icon--dropdown" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-dropdown"></use>
            </svg>
        </span>
    </button>
    <ul class="fake-menu-button__menu fake-menu-button__menu--fix-width">
        <li>
            <a class="fake-menu-button__item" href="http://www.ebay.com" aria-current="page">
                <span>Link 10000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 20000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 30000</span>
            </a>
        </li>
        <li>
            <a href="http://www.ebay.com" class="fake-menu-button__item">
                <span>Link 40000</span>
            </a>
        </li>
    </ul>
</span>
`;
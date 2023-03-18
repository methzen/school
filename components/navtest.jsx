import React, { Component } from 'react';

class  Sidenav extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col-lg-3 doc_mobile_menu display_none">
            <aside className="doc_left_sidebarlist">
                <div className="open_icon" id="left">
                    <i className="arrow_carrot-right"></i>
                    <i className="arrow_carrot-left"></i>
                </div>
                <div className="scroll">
                    <ul className="list-unstyled nav-sidebar">
                        <li className="nav-item active">
                            <a href="doc-main.html" className="nav-link active"><img src="img/side-nav/home.png" alt="" />Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="doc-main.html" className="nav-link"><img src="img/side-nav/briefcase.png" alt="briefcase" />Elements</a>
                            <span className="icon"><i className="arrow_carrot-down"></i></span>
                            <ul className="list-unstyled dropdown_nav">
                                <li><a href="doc-element-tab.html">Tabs</a></li>
                                <li><a href="doc-element-accordion.html">Accordion</a></li>
                                <li><a href="doc-element-notice.html">Notices</a></li>
                                <li><a href="doc-content-tables.html">Table</a></li>
                                <li><a href="doc-element-lightbox.html">Image Lightbox</a></li>
                                <li><a href="doc-element-hotspots.html">Image Hotspots</a></li>
                                <li><a href="doc-element-code.html">Source Code</a></li>
                                <li><a href="doc-content-tooltip.html">Tooltip</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="typography.html" className="nav-link"><img src="img/side-nav/document.png" alt="" />Content</a>
                            <span className="icon"><i className="arrow_carrot-down"></i></span>
                            <ul className="list-unstyled dropdown_nav">
                                <li><a href="doc-content-image.html">Image</a></li>
                                <li><a href="doc-element-tab.html">Tables</a></li>
                                <li><a href="doc-element-code.html">Code</a></li>
                                <li><a href="doc-content-video.html">Video</a></li>
                                <li><a href="doc-content-tooltip.html">Tooltips & Direction</a></li>
                                <li><a href="typography.html">Typography</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="doc-ref-cheatsheet.html" className="nav-link"><img src="img/side-nav/chat1.png" alt="" />Reference</a>
                            <span className="icon"><i className="arrow_carrot-down"></i></span>
                            <ul className="list-unstyled dropdown_nav">
                                <li><a href="doc-ref-cheatsheet.html">Cheatsheet</a></li>
                                <li><a href="doc-ref-footnote.html">Footnotes</a></li>
                                <li><a href="doc-tour.html">Interface Tour</a></li>
                                <li><a href="doc-ref-can-use.html">Can I Use</a></li>
                                <li><a href="doc-content-tooltip.html">Tooltips & Direction</a></li>
                                <li><a href="doc-ref-shortcuts.html">Keyboard Shortcuts</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="doc-content-video.html" className="nav-link"><img src="img/side-nav/layout.png" alt="" />Layouts</a>
                            <span className="icon"><i className="arrow_carrot-down"></i></span>
                            <ul className="list-unstyled dropdown_nav">
                                <li><a href="doc-content-video.html">Full-width</a></li>
                                <li><a href="doc-element-hotspots.html">Left Sidebar</a></li>
                                <li><a href="doc-layout-banner-gradient.html">Gradient Banner</a></li>
                                <li><a href="doc-layout-banner-empty.html">Without Banner</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="doc-changelog.html" className="nav-link"><img src="img/side-nav/clock.png" alt="" />Change Log</a>
                        </li>
                    </ul>
                    <ul className="list-unstyled nav-sidebar coding_nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link"><img src="img/side-nav/account.png" alt="" />Account</a>
                        </li>
                        <li className="nav-item">
                            <a href="doc-element-code.html" className="nav-link"><img src="img/side-nav/coding.png" alt="" />Development</a>
                        </li>
                    </ul>
                    <ul className="list-unstyled nav-sidebar bottom_nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link"><img src="img/side-nav/united-states.png" alt="" />United States</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><img src="img/side-nav/edit.png" alt="" />English </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><img src="img/side-nav/users.png" alt="" />Sign In <i class="arrow_right"></i></a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
        );
    }
}
 
export default Sidenav;
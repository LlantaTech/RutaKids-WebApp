'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">llantatech documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AboutComponent.html" data-type="entity-link" >AboutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActiveProjectsComponent.html" data-type="entity-link" >ActiveProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllProjectsComponent.html" data-type="entity-link" >AllProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationComponent.html" data-type="entity-link" >AuthenticationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BasicExpansionComponent.html" data-type="entity-link" >BasicExpansionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlankLayoutComponent.html" data-type="entity-link" >BlankLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlankPageComponent.html" data-type="entity-link" >BlankPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" >ChangePasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComingSoonComponent.html" data-type="entity-link" >ComingSoonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompletedProjectsComponent.html" data-type="entity-link" >CompletedProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmEmailComponent.html" data-type="entity-link" >ConfirmEmailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreatePrimaryComponent.html" data-type="entity-link" >CreatePrimaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateSchoolRoutesComponent.html" data-type="entity-link" >CreateSchoolRoutesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateSchoolTransportationComponent.html" data-type="entity-link" >CreateSchoolTransportationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateSecondaryComponent.html" data-type="entity-link" >CreateSecondaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomizerSettingsComponent.html" data-type="entity-link" >CustomizerSettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistrictFieldComponent.html" data-type="entity-link" >DistrictFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditPrimaryComponent.html" data-type="entity-link" >EditPrimaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditSchoolRoutesComponent.html" data-type="entity-link" >EditSchoolRoutesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditSchoolTransportationComponent.html" data-type="entity-link" >EditSchoolTransportationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditSecondaryComponent.html" data-type="entity-link" >EditSecondaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FaqPageComponent.html" data-type="entity-link" >FaqPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" >ForgotPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GlobalAlertComponent.html" data-type="entity-link" >GlobalAlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GradeCardComponent.html" data-type="entity-link" >GradeCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GradeCardsPrimaryComponent.html" data-type="entity-link" >GradeCardsPrimaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GradeCardsSecondaryComponent.html" data-type="entity-link" >GradeCardsSecondaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InternalErrorComponent.html" data-type="entity-link" >InternalErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoutComponent.html" data-type="entity-link" >LogoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainLayoutComponent.html" data-type="entity-link" >MainLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapSelectorComponent.html" data-type="entity-link" >MapSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyProfileComponent.html" data-type="entity-link" >MyProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyProfileSettingsComponent.html" data-type="entity-link" >MyProfileSettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotificationsListComponent.html" data-type="entity-link" >NotificationsListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrimaryComponent.html" data-type="entity-link" >PrimaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrimaryListComponent.html" data-type="entity-link" >PrimaryListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrivacyPolicyComponent.html" data-type="entity-link" >PrivacyPolicyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectsOverviewComponent.html" data-type="entity-link" >ProjectsOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectsProgressComponent.html" data-type="entity-link" >ProjectsProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectsRoadmapComponent.html" data-type="entity-link" >ProjectsRoadmapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" >ResetPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesComponent.html" data-type="entity-link" >SchoolRoutesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesFormComponent.html" data-type="entity-link" >SchoolRoutesFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesListComponent.html" data-type="entity-link" >SchoolRoutesListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesOverviewComponent.html" data-type="entity-link" >SchoolRoutesOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesSelectorSchoolTransportationComponent.html" data-type="entity-link" >SchoolRoutesSelectorSchoolTransportationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesSelectorStudentsComponent.html" data-type="entity-link" >SchoolRoutesSelectorStudentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolRoutesTableComponent.html" data-type="entity-link" >SchoolRoutesTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolTransportationComponent.html" data-type="entity-link" >SchoolTransportationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolTransportationFormComponent.html" data-type="entity-link" >SchoolTransportationFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolTransportationListComponent.html" data-type="entity-link" >SchoolTransportationListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SecondaryComponent.html" data-type="entity-link" >SecondaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SecondaryListComponent.html" data-type="entity-link" >SecondaryListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignInComponent.html" data-type="entity-link" >SignInComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentFormComponent.html" data-type="entity-link" >StudentFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentsComponent.html" data-type="entity-link" >StudentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentsListComponent.html" data-type="entity-link" >StudentsListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TermsConditionsComponent.html" data-type="entity-link" >TermsConditionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TotalMembersComponent.html" data-type="entity-link" >TotalMembersComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TotalProjectsComponent.html" data-type="entity-link" >TotalProjectsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomizerSettingsService.html" data-type="entity-link" >CustomizerSettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalAlertService.html" data-type="entity-link" >GlobalAlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlatformService.html" data-type="entity-link" >PlatformService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolRoutesService.html" data-type="entity-link" >SchoolRoutesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolTransportationService.html" data-type="entity-link" >SchoolTransportationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToggleService.html" data-type="entity-link" >ToggleService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Coordinates.html" data-type="entity-link" >Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalAlert.html" data-type="entity-link" >GlobalAlert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Parent.html" data-type="entity-link" >Parent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SchoolRoutes.html" data-type="entity-link" >SchoolRoutes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SchoolTransportation.html" data-type="entity-link" >SchoolTransportation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Student.html" data-type="entity-link" >Student</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
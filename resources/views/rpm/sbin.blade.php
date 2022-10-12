@php
    $html_tag_data = [];
    $title = 'SBIN';
    $description= 'SBIN Datas'
@endphp
@extends('layout',[
'html_tag_data'=>$html_tag_data,
'title'=>$title,
'description'=>$description
])

@section('css')
@endsection

@section('js_vendor')
    <script src="{{ asset('/js/vendor/Chart.bundle.min.js') }}"></script>
    <script src="{{ asset('/js/vendor/chartjs-plugin-rounded-bar.min.js') }}"></script>
    <script src="{{ asset('/js/vendor/jquery.barrating.min.js') }}"></script>
@endsection
 
@section('content')
    <div class="container">
        <!-- Title and Top Buttons Start -->
        <div class="page-title-container">
            <div class="row">
                <!-- Title Start -->
                <div class="col-12 col-md-7">
                    <a class="muted-link pb-2 d-inline-block hidden" href="#">
                        <span class="align-middle lh-1 text-small">&nbsp;</span>
                    </a>
                    <a href="{{ url('/') }}" class="text d-flex align-middle text-alternate align-items-center text-small">
                                        <i data-cs-icon="chevron-left"></i>
                                        <span class="text-primary cta-4">General</span>
                                    </a>
                </div>
                <!-- Title End -->
            </div>
        </div>
        <!-- Title and Top Buttons End -->
 

        <div class="row">
           
           <!-- Performance Start -->
           <div class="col-12">
               <div class="d-flex">
                   <h2 class="small-title">Evolution</h2>
               </div>
               <div class="card sh-45 h-xl-100-card">
                   <div class="card-body h-100">
                       <div class="h-100">
                           <canvas id="areaChart"></canvas>
                           <div
                               class="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
                           >
                               <div
                                   class="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
                               >
                                   <span class="icon"></span>
                               </div>
                               <div>
                                   <span class="text d-flex align-middle text-alternate align-items-center text-small">Bread</span>
                                   <span
                                       class="value d-flex align-middle text-body align-items-center cta-4">300</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <!-- Performance End -->
            
       </div>
        <div class="row">
           
            <!-- Performance Start -->
            <div class="col-xl-6 mb-5">
                <div class="d-flex">
                    <h2 class="small-title">RPM Moyen</h2>
                </div>
                <div class="card sh-45 h-xl-100-card">
                    <div class="card-body h-100">
                    
                        <div class="h-100">
                         <canvas id="horizontalTooltipChart1"></canvas>                            <div
                                class="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
                            >
                                <div
                                    class="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
                                >
                                    <span class="icon"></span>
                                </div>
                                <div>
                                    <span class="text d-flex align-middle text-alternate align-items-center text-small">Bread</span>
                                    <span
                                        class="value d-flex align-middle text-body align-items-center cta-4">300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Performance End -->
            <!-- Performance Start -->
            <div class="col-xl-6 mb-5">
                <div class="d-flex">
                    <h2 class="small-title">Ecart type moyen</h2>
                </div>
                <div class="card sh-45 h-xl-100-card">
                    <div class="card-body h-100">
                        <div class="h-100">
                            <canvas id="horizontalTooltipChart2"></canvas>
                            <div
                                class="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
                            >
                                <div
                                    class="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
                                >
                                    <span class="icon"></span>
                                </div>
                                <div>
                                    <span class="text d-flex align-middle text-alternate align-items-center text-small">Bread</span>
                                    <span
                                        class="value d-flex align-middle text-body align-items-center cta-4">300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Performance End -->
        </div>
        <div class="row">
           
           <!-- Performance Start -->
           <div class="col-xl-6 mb-5">
               <div class="d-flex">
                   <h2 class="small-title">RPM Moyen</h2>
               </div>
               <div class="card sh-45 h-xl-100-card">
                   <div class="card-body h-100">
                   
                       <div class="h-100">
                        <canvas id="horizontalTooltipChart1"></canvas>                            <div
                               class="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
                           >
                               <div
                                   class="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
                               >
                                   <span class="icon"></span>
                               </div>
                               <div>
                                   <span class="text d-flex align-middle text-alternate align-items-center text-small">Bread</span>
                                   <span
                                       class="value d-flex align-middle text-body align-items-center cta-4">300</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <!-- Performance End -->
           <!-- Performance Start -->
           <div class="col-xl-6 mb-5">
               <div class="d-flex">
                   <h2 class="small-title">Ecart type moyen</h2>
               </div>
               <div class="card sh-45 h-xl-100-card">
                   <div class="card-body h-100">
                       <div class="h-100">
                           <canvas id="horizontalTooltipChart2"></canvas>
                           <div
                               class="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
                           >
                               <div
                                   class="icon-container border d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
                               >
                                   <span class="icon"></span>
                               </div>
                               <div>
                                   <span class="text d-flex align-middle text-alternate align-items-center text-small">Bread</span>
                                   <span
                                       class="value d-flex align-middle text-body align-items-center cta-4">300</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <!-- Performance End -->
       </div>
        
        
    </div>
@endsection
@section('js_page')
    <script src="{{ asset('/js/pages/dashboard2.js') }}"></script>
    <script src="{{ asset('/js/cs/charts.extend.js') }}"></script>      
    <script src="{{ asset('/js/vendor/bootstrap-notify.min.js') }}"></script>
     
@endsection
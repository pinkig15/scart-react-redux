// action types
import React from 'react'
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const LOGIN = "LOGIN";
export const FETCH_FILTER_DATA = "FETCH_FILTER_DATA";

export const CartIcon = () => (
<svg x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
<path d="M24,52c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S27.3,52,24,52z M24,60c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S25.1,60,24,60z"
  />
<path d="M51,52c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S54.3,52,51,52z M51,60c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S52.1,60,51,60z"
  />
<path d="M19,42h39.8l4.5-34H13.5l-1.9-8H0v4h8.4l8.2,34.5c-2.1,0.9-3.6,3-3.6,5.5c0,3.3,2.7,6,6,6h39v-4H19c-1.1,0-2-0.9-2-2
  S17.9,42,19,42z M44,27v11H31V27H44z M31,23V12h13v11H31z M27,38h-6.4L18,27h9V38z M48,38V27h8.7l-1.5,11H48z M57.2,23H48V12h10.7
  L57.2,23z M27,12v11H17l-2.6-11H27z"/>
</svg> )

export const LogoutIcon = () => (
    <svg x="0px" y="0px" height="20" width="20"
	 viewBox="0 0 30.143 30.143" >
<g>
	<path fill="#030104" d="M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83
		c-5.982,0-10.832-4.85-10.832-10.83c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801
		c0,7.921,6.42,14.342,14.34,14.342c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z"/>
	<path fill="#030104" d="M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08
		c-1.57,0-1.732,0.932-1.732,2.08v13.496C13.062,16.722,13.225,17.652,14.795,17.652z"/>
</g>
</svg>
)

export const ResetIcon = () => (
	<svg x="0px" y="0px" width="20" height="20" viewBox="0 0 512 512">
<g>
	<path d="M478.213,163.221l-46.805-80.939c-5.163-9.515-16.896-13.824-27.648-9.963l-52.885,21.248
		c-10.069-7.232-20.629-13.376-31.531-18.304L311.301,19.2C309.957,8.256,300.443,0,289.221,0h-93.867
		c-11.221,0-20.715,8.256-22.059,19.008l-8.064,56.277c-10.581,4.821-20.949,10.859-31.467,18.325L80.731,72.299
		c-10.389-4.032-22.208,0.235-27.456,9.771L6.405,163.157c-5.632,9.557-3.307,21.952,5.44,28.864l44.8,35.029
		c-0.683,6.763-1.024,12.672-1.024,18.283s0.341,11.52,1.045,18.261l-44.864,35.072c-8.555,6.763-10.901,18.752-5.461,28.779
		l46.805,80.96c5.205,9.493,16.896,13.845,27.669,9.941l52.885-21.248c10.069,7.232,20.629,13.376,31.531,18.304l8.043,56.085
		c1.365,10.923,10.88,19.179,22.08,19.179h73.515c3.989,0,7.637-2.219,9.429-5.675c1.835-3.52,1.557-7.765-0.704-11.029
		c-16.341-23.381-24.96-50.795-24.96-79.232c0-13.269,1.941-26.56,5.781-39.509c0.981-3.328,0.299-6.933-1.856-9.643
		c-2.155-2.709-5.461-4.16-8.939-4.053c-1.152,0.064-2.283,0.213-5.184,0.576c-53.056,0-96.213-43.157-96.213-96.213
		c0-53.077,43.157-96.235,96.213-96.235s96.213,43.157,96.021,97.984c-0.149,1.131-0.299,2.261-0.363,3.413
		c-0.171,3.456,1.344,6.784,4.053,8.939c2.731,2.155,6.336,2.795,9.643,1.856c20.757-6.187,41.216-7.68,64.384-3.456
		c2.837,0.512,5.952-0.768,8.341-2.539c2.389-1.771,3.947-5.056,4.267-8c0.043-0.384,0.149-2.112,0.149-2.496
		c0-6.635-0.469-12.907-1.024-18.283L472.752,192C481.307,185.259,483.675,173.269,478.213,163.221z M410.117,213.931
		c-2.944,2.304-4.48,6.016-4.011,9.728c0.448,3.584,0.917,7.595,1.216,11.861c-16.299-1.728-31.915-0.832-47.531,2.325
		c-4.117-61.12-55.147-109.589-117.291-109.589c-64.811,0-117.547,52.736-117.547,117.568c0,62.165,48.469,113.195,109.589,117.291
		c-2.112,10.432-3.179,20.992-3.179,31.552c0,26.176,6.336,51.605,18.432,74.496l-55.36-0.512l-8.917-62.187
		c-0.555-3.755-3.029-6.933-6.528-8.363c-12.992-5.312-25.493-12.587-37.205-21.589c-1.899-1.472-4.203-2.219-6.507-2.219
		c-1.344,0-2.688,0.256-3.968,0.768l-59.541,22.869l-46.784-82.475l49.515-38.72c2.944-2.304,4.48-6.016,4.011-9.728
		c-1.067-8.491-1.557-15.381-1.557-21.675s0.491-13.184,1.557-21.675c0.469-3.712-1.067-7.424-4.011-9.728l-49.664-40
		l48.021-81.792l58.432,23.467c3.477,1.387,7.424,0.875,10.389-1.365c12.587-9.451,24.789-16.533,37.291-21.653
		c3.499-1.451,5.995-4.608,6.528-8.363l9.856-62.891l94.784,0.704l8.917,62.187c0.555,3.755,3.029,6.933,6.528,8.363
		c12.971,5.312,25.493,12.565,37.205,21.589c2.965,2.304,6.955,2.837,10.475,1.429l59.541-22.848l46.827,82.453L410.117,213.931z"
		/>
</g>
<g>
	<path d="M497.669,360.085c-8-32-43.925-82.752-106.347-82.752c-64.704,0-117.333,52.629-117.333,117.333S326.619,512,391.323,512
		c5.909,0,10.667-4.779,10.667-10.667c0-5.888-4.779-10.667-10.667-10.667c-52.928,0-96-43.072-96-96s43.072-96,96-96
		c52.16,0,80.235,44.864,85.653,66.581c1.408,5.717,7.232,9.195,12.928,7.765C495.621,371.584,499.099,365.803,497.669,360.085z"/>
</g>
<g>
	<path d="M497.989,298.667c-5.888,0-10.667,4.779-10.667,10.667v53.333h-53.333c-5.888,0-10.667,4.779-10.667,10.667
		c0,5.888,4.779,10.667,10.667,10.667h64c5.909,0,10.667-4.779,10.667-10.667v-64C508.656,303.445,503.877,298.667,497.989,298.667
		z"/>
</g>
</svg>

)
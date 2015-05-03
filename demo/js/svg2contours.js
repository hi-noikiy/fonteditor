/**
 * @file svg2contours.js
 * @author mengke01
 * @date
 * @description
 * svg转ttfobject
 */

define(
    function(require) {

        var path2contours = require('ttf/svg/path2contours');
        var contours2svg = require('ttf/util/contours2svg');

        //var text = 'M398.548233 550.86533q0 11.73639-1.956065 22.983763t-6.846227 22.005731q-4.890162 6.846227-9.291309 7.335244t-8.313276-1.467049q-5.868195-2.934097-10.758357-12.714422t-4.890162-27.384909q0.978032-122.254059-1.467049-248.420248t-4.401146-247.442216l-158.441261 0 0 485.104107q0 33.253104-15.64852 57.2149t-57.703916 23.961796l-17.604585 0q26.406877 30.319007 55.258835 44.011461t71.885387 13.692455q28.362942 0 52.813754-10.269341t42.055396-28.851958l3.91213 2.934097 4.890162 3.91213q25.428844 19.560649 52.813754 25.917861t49.879656 6.357211q27.384909 0 51.835721-10.269341t43.033429-28.851958l2.934097 2.934097 4.890162 3.91213q25.428844 19.560649 52.813754 25.917861t49.879656 6.357211q25.428844 0 48.412607-8.802292t40.099331-24.450812 27.873926-37.165234 10.758357-47.923591q1.956065-60.638013 0-147.682904 5.868195 16.626552 14.670487 34.231137t21.027698 32.275072 27.873926 23.961796 36.187202 9.291309q16.626552 0 39.610315-4.401146t44.011461-30.319007 35.698185-81.665712 14.670487-157.463228q0-74.330468-17.115568-133.012416t-43.033429-103.182426-56.236867-76.286533-56.725883-52.324737q6.846227-2.934097 13.692455-3.91213t14.670487-0.978032q18.582617 0 34.231137 5.868195t28.362942 13.692455q13.692455 8.802292 26.406877 20.538682l0-55.747851q-5.868195-15.64852-23.472779-27.384909-14.670487-10.758357-42.055396-19.071633t-74.330468-8.313276q-51.835721 0-89.978988 16.626552-28.362942-9.780325-57.703916-16.626552t-53.791786-11.73639q-28.362942-5.868195-55.747851-9.780325l0 60.638013q13.692455 0 30.319007 3.91213 13.692455 2.934097 32.764088 7.82426t41.56638 14.670487q-13.692455 18.582617-22.494747 41.56638t-14.181471 47.434575-8.313276 50.368672-3.91213 51.346705l0 16.626552 0 468.477555q0 11.73639-1.956065 22.983763t-6.846227 22.005731q-3.91213 6.846227-8.313276 7.82426t-8.313276-0.978032q-4.890162-2.934097-10.269341-11.247373t-6.357211-23.961796q0.978032-55.747851 0.489016-120.787011t-1.467049-131.545368-2.445081-131.056351-2.445081-118.341929l-157.463228 0 0 485.104107zM765.310411 269.191977l0-3.91213 0-16.626552q-0.978032-54.769819-1.956065-101.715377t-0.978032-81.176695q0-32.275072 2.445081-58.192932t7.335244-45.47851q37.165234 42.055396 61.616046 107.094556t24.450812 159.908309q0 89.978988-6.846227 133.990449t-16.626552 55.747851-21.516714-1.956065-22.494747-39.121299-17.604585-56.236867-7.82426-52.324737z'
        //var text = 'M890.88 748.512q28.672 0 52.736-10.752t41.984-29.184 28.16-43.52 10.24-53.76l0-620.544q0-28.672-10.24-53.76t-28.16-43.52-41.984-29.184-52.736-10.752l-689.152 0q-28.672 0-53.76 10.752t-43.52 29.184-29.184 43.52-10.752 53.76l0 620.544q0 28.672 10.752 53.76t29.184 43.52 43.52 29.184 53.76 10.752l689.152 0zM256 557.024q9.216 0 27.648-0.512t43.008-0.512l52.224 0 55.296 0q64.512 0 141.312 1.024l0 63.488-126.976 0 0 64.512-64.512 0 0-64.512-128 0 0-63.488zM377.856 451.552q-8.192 15.36-15.36 29.696-6.144 12.288-12.288 25.088t-9.216 20.992l-58.368-21.504 32.768-76.8zM254.976 55.264l101.376 143.36-66.56 26.624-98.304-145.408zM448.512 237.536l126.976 0 0 62.464-45.056 0-81.92 0 0 64.512q23.552 0 46.08-0.512t40.96-0.512l40.96 0 0 63.488-66.56 0q-19.456 0-40.96 1.024l68.608 65.536-68.608 32.768-20.48-98.304-257.024 0 0-63.488 35.84 0 47.104 0 53.248 0 56.32 0 0-64.512-128 0 0-62.464 40.96 0q18.432 0 40.96-0.512t46.08 0.512l0-129.024q0-16.384-2.048-27.136t-10.24-15.36-25.088-4.608-47.616 5.12q25.6-31.744 27.648-71.68 13.312 2.048 34.304 1.024t40.448 1.536 33.28 12.8 13.824 34.816l0 192.512zM568.32 126.944q-16.384 19.456-29.696 37.888-11.264 15.36-23.552 30.208t-18.432 23.04l-46.08-30.72 64.512-98.304zM896 432.096q-20.48 1.024-53.248 0.512t-63.488-1.536q-36.864-1.024-75.776-3.072l0 129.024q49.152 0 85.504 4.608t59.904 9.728q27.648 6.144 46.08 14.336-18.432 27.648-29.696 46.08-5.12 8.192-9.728 15.36t-7.68 11.264-3.584 4.608 1.536-4.608q-21.504-16.384-57.344-24.064t-69.632-10.752-57.344-3.072-21.504 0q1.024-16.384 1.536-44.032t0-77.824-1.024-129.024-0.512-196.608q0-13.312-3.072-33.28t-10.24-39.936-19.968-35.328-31.232-19.456q12.288-3.072 21.504-11.776t16.896-18.432 13.824-19.456 12.288-14.848q12.288 18.432 23.552 42.496t20.48 50.176 14.336 52.224 5.12 47.616l0 40.96 0 43.008 0 47.104 0 60.416 64.512 0 0-384 63.488 0 0 384q23.552-1.024 35.328-0.512t29.184-3.584l0 71.68z'
        //var text = 'M117 419 L335 419 Q337 419 337 417 L337 383 Q337 381 335 381 L300 381 Q373 237 373 235 L375 235 L448 382 Q446 382 412 418 L414 419 L557 419 Q559 419 559 417 L559 383 Q559 381 557 381 L521 381 L338 13 L337 13 Q335 14 152 381 L117 381 Q115 381 115 383 L115 417 Q115 419 117 419 Z'
        //var text = 'M269.5,102V36.3c0-8,10-15.2,18-15.2s16.6,7.2,16.6,15.2v45.9h22.5V36.3C326.5,17.4,309.799,0,291,0 c-30.1,0-42.6,17.4-42.6,36.3v67.2c-29.701,5.7-54.602,26.1-67.701,52.3 -11.4-23-32-41.4-56.8-49.5v-70C123.8,17.4,111.3,0,81.2,0 C62.4,0,45.6,17.4,45.6,36.3v45.9h22.5V36.3c0-8,8.601-15.2,16.601-15.2s18,7.2,18,15.2v65.9c-2.2-0.2-4.5-0.3-6.8-0.3 C43.8,101.9,0,145.7,0,197.8c0,52.1,43.8,94.5,95.9,94.5h169.399c52.102,0,95.9-42.4,95.9-94.5 C361.299,147.1,319.799,104.2,269.5,102z M265.299,269.8H95.9c-41.301,0-73.4-30.801-73.4-72c0-41.3,32.2-74.1,73.4-74.1 c41.3,0,74.8,32.899,74.8,74.1h19.701c0-41.3,33.6-74.1,74.799-74.1c41.301,0,73.4,32.899,73.4,74.1 C338.7,239.099,306.6,269.8,265.299,269.8z M90.6,326.3h180.5v-11.6H90.6V326.3z'
        //var text = 'M216.501,199.847c-11.442,0-21.956,3.891-30.38,10.367l-86.92-52.15c0.436-2.668,0.722-5.389,0.722-8.178c0-2.793-0.286-5.509-0.722-8.177l86.92-52.153c8.424,6.478,18.938,10.368,30.38,10.368c27.589,0,49.962-22.372,49.962-49.962 C266.463,22.372,244.09,0,216.501,0c-27.59,0-49.961,22.372-49.961,49.961c0,2.792,0.286,5.511,0.728,8.178L80.349,110.29 c-8.425-6.476-18.941-10.367-30.387-10.367C22.372,99.923,0,122.295,0,149.886c0,27.59,22.372,49.961,49.962,49.961 c11.446,0,21.962-3.891,30.387-10.365l86.918,52.15c-0.441,2.666-0.728,5.383-0.728,8.178c0,27.588,22.371,49.961,49.961,49.961 c27.589,0,49.962-22.373,49.962-49.961C266.463,222.22,244.09,199.847,216.501,199.847Z'
        //var text = 'M300,200 h-150 a150,150 0 1,0 150,-150 z';
        //var text = 'M832 1024c-35.36 0-64-28.672-64-64 0 0 0-896.032 0-896.032 0-35.328 28.64-64 64-64 35.328 0 64 28.672 64 64 0 0 0 896.032 0 896.032 0 35.328-28.672 64-64 64z'
        //var text = 'M647.5,1053.563c-35.36,0-64-28.672-64-64V93.532c0-35.328,28.64-64,64-64c35.327,0,64,28.672,64,64v896.031C711.5,1024.892,682.827,1053.563,647.5,1053.563z M64,1024.032c-35.36,0-64-28.672-64-64V64C0,28.672,28.64,0,64,0c35.328,0,64,28.672,64,64v896.032C128,995.36,99.328,1024.032,64,1024.032z'
        var text = 'M8.376,4.84 L6,4.84 L6,4 L11.76,4 L11.76,4.84 L9.384,4.84 L9.384,11.872 L8.376,11.872 L8.376,4.84 Z M14.808,4.84 L12.432,4.84 L12.432,4 L18.192,4 L18.192,4.84 L15.816,4.84 L15.816,11.872 L14.808,11.872 L14.808,4.84 Z M19.608,4 L24.144,4 L24.144,4.84 L20.604,4.84 L20.604,7.504 L23.604,7.504 L23.604,8.344 L20.604,8.344 L20.604,11.872 L19.608,11.872 L19.608,4 Z'
        var entry = {

            /**
             * 初始化
             */
            init: function () {

                var contours = path2contours(text);
                console.log(contours);
                var path = contours2svg(contours);

                $('#path').attr('d', path);
            }
        };

        entry.init();

        return entry;
    }
);

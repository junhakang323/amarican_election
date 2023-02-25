var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_dwin3_1 = new ol.format.GeoJSON();
var features_dwin3_1 = format_dwin3_1.readFeatures(json_dwin3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin3_1.addFeatures(features_dwin3_1);
var lyr_dwin3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin3_1, 
                style: style_dwin3_1,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin3<br />\
    <img src="styles/legend/dwin3_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/dwin3_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/dwin3_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/dwin3_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/dwin3_1_4.png" /> 4 - 5<br />\
    <img src="styles/legend/dwin3_1_5.png" /> 5 - 100<br />'
        });
var format_dwin2_2 = new ol.format.GeoJSON();
var features_dwin2_2 = format_dwin2_2.readFeatures(json_dwin2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin2_2.addFeatures(features_dwin2_2);
var lyr_dwin2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin2_2, 
                style: style_dwin2_2,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin2<br />\
    <img src="styles/legend/dwin2_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/dwin2_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/dwin2_2_2.png" /> 10 - 20<br />\
    <img src="styles/legend/dwin2_2_3.png" /> 20 - 30<br />\
    <img src="styles/legend/dwin2_2_4.png" /> 30 - 40<br />\
    <img src="styles/legend/dwin2_2_5.png" /> 40 - 49.8<br />'
        });
var format_dwin1_3 = new ol.format.GeoJSON();
var features_dwin1_3 = format_dwin1_3.readFeatures(json_dwin1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin1_3.addFeatures(features_dwin1_3);
var lyr_dwin1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin1_3, 
                style: style_dwin1_3,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin1<br />\
    <img src="styles/legend/dwin1_3_0.png" /> 0.7 - 5<br />\
    <img src="styles/legend/dwin1_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/dwin1_3_2.png" /> 10 - 20<br />\
    <img src="styles/legend/dwin1_3_3.png" /> 20 - 12.4<br />\
    <img src="styles/legend/dwin1_3_4.png" /> 12.4 - 15.4<br />\
    <img src="styles/legend/dwin1_3_5.png" /> 15.4 - 19.6<br />'
        });
var format_rwin4_4 = new ol.format.GeoJSON();
var features_rwin4_4 = format_rwin4_4.readFeatures(json_rwin4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rwin4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rwin4_4.addFeatures(features_rwin4_4);
var lyr_rwin4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rwin4_4, 
                style: style_rwin4_4,
				'opacity': 0.7,
                interactive: true,
    title: 'rwin4<br />\
    <img src="styles/legend/rwin4_4_0.png" /> 0 - 5<br />\
    <img src="styles/legend/rwin4_4_1.png" /> 5 - 10<br />\
    <img src="styles/legend/rwin4_4_2.png" /> 10 - 15<br />\
    <img src="styles/legend/rwin4_4_3.png" /> 15 - 11.3<br />\
    <img src="styles/legend/rwin4_4_4.png" /> 11.3 - 11.3<br />\
    <img src="styles/legend/rwin4_4_5.png" /> 11.3 - 11.3<br />'
        });
var format_rwin3_5 = new ol.format.GeoJSON();
var features_rwin3_5 = format_rwin3_5.readFeatures(json_rwin3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rwin3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rwin3_5.addFeatures(features_rwin3_5);
var lyr_rwin3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rwin3_5, 
                style: style_rwin3_5,
				'opacity': 0.7,
                interactive: true,
    title: 'rwin3<br />\
    <img src="styles/legend/rwin3_5_0.png" /> 0 - 1<br />\
    <img src="styles/legend/rwin3_5_1.png" /> 1 - 2<br />\
    <img src="styles/legend/rwin3_5_2.png" /> 2 - 30<br />\
    <img src="styles/legend/rwin3_5_3.png" /> 30 - 31<br />\
    <img src="styles/legend/rwin3_5_4.png" /> 31 - 32<br />\
    <img src="styles/legend/rwin3_5_5.png" /> 32 - 100<br />'
        });
var format_dwin5_6 = new ol.format.GeoJSON();
var features_dwin5_6 = format_dwin5_6.readFeatures(json_dwin5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin5_6.addFeatures(features_dwin5_6);
var lyr_dwin5_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin5_6, 
                style: style_dwin5_6,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin5<br />\
    <img src="styles/legend/dwin5_6_0.png" /> 1 - 2<br />\
    <img src="styles/legend/dwin5_6_1.png" /> 2 - 2<br />\
    <img src="styles/legend/dwin5_6_2.png" /> 2 - 3<br />\
    <img src="styles/legend/dwin5_6_3.png" /> 3 - 4<br />\
    <img src="styles/legend/dwin5_6_4.png" /> 4 - 40<br />\
    <img src="styles/legend/dwin5_6_5.png" /> 40 - 44.5<br />'
        });
var format_rwin2_7 = new ol.format.GeoJSON();
var features_rwin2_7 = format_rwin2_7.readFeatures(json_rwin2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rwin2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rwin2_7.addFeatures(features_rwin2_7);
var lyr_rwin2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rwin2_7, 
                style: style_rwin2_7,
				'opacity': 0.7,
                interactive: true,
    title: 'rwin2<br />\
    <img src="styles/legend/rwin2_7_0.png" /> 0 - 5<br />\
    <img src="styles/legend/rwin2_7_1.png" /> 5 - 10<br />\
    <img src="styles/legend/rwin2_7_2.png" /> 10 - 20<br />\
    <img src="styles/legend/rwin2_7_3.png" /> 20 - 30<br />\
    <img src="styles/legend/rwin2_7_4.png" /> 30 - 40<br />\
    <img src="styles/legend/rwin2_7_5.png" /> 40 - 39.9<br />'
        });
var format_rwin1_8 = new ol.format.GeoJSON();
var features_rwin1_8 = format_rwin1_8.readFeatures(json_rwin1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rwin1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rwin1_8.addFeatures(features_rwin1_8);
var lyr_rwin1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rwin1_8, 
                style: style_rwin1_8,
				'opacity': 0.7,
                interactive: true,
    title: 'rwin1<br />\
    <img src="styles/legend/rwin1_8_0.png" /> 0.2 - 5<br />\
    <img src="styles/legend/rwin1_8_1.png" /> 5 - 10<br />\
    <img src="styles/legend/rwin1_8_2.png" /> 10 - 20<br />\
    <img src="styles/legend/rwin1_8_3.png" /> 20 - 30<br />\
    <img src="styles/legend/rwin1_8_4.png" /> 30 - 22.6<br />\
    <img src="styles/legend/rwin1_8_5.png" /> 22.6 - 24.7<br />'
        });
var format_dwin6_9 = new ol.format.GeoJSON();
var features_dwin6_9 = format_dwin6_9.readFeatures(json_dwin6_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin6_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin6_9.addFeatures(features_dwin6_9);
var lyr_dwin6_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin6_9, 
                style: style_dwin6_9,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin6<br />\
    <img src="styles/legend/dwin6_9_0.png" /> 0 - 5<br />\
    <img src="styles/legend/dwin6_9_1.png" /> 5 - 10<br />\
    <img src="styles/legend/dwin6_9_2.png" /> 10 - 20<br />\
    <img src="styles/legend/dwin6_9_3.png" /> 20 - 13.2<br />\
    <img src="styles/legend/dwin6_9_4.png" /> 13.2 - 13.2<br />\
    <img src="styles/legend/dwin6_9_5.png" /> 13.2 - 13.2<br />'
        });
var format_dwin4_10 = new ol.format.GeoJSON();
var features_dwin4_10 = format_dwin4_10.readFeatures(json_dwin4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwin4_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwin4_10.addFeatures(features_dwin4_10);
var lyr_dwin4_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dwin4_10, 
                style: style_dwin4_10,
				'opacity': 0.7,
                interactive: true,
    title: 'dwin4<br />\
    <img src="styles/legend/dwin4_10_0.png" /> 0 - 5<br />\
    <img src="styles/legend/dwin4_10_1.png" /> 5 - 10<br />\
    <img src="styles/legend/dwin4_10_2.png" /> 10 - 20<br />\
    <img src="styles/legend/dwin4_10_3.png" /> 20 - 30<br />\
    <img src="styles/legend/dwin4_10_4.png" /> 30 - 23.1<br />\
    <img src="styles/legend/dwin4_10_5.png" /> 23.1 - 23.1<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_dwin3_1.setVisible(true);lyr_dwin2_2.setVisible(true);lyr_dwin1_3.setVisible(true);lyr_rwin4_4.setVisible(true);lyr_rwin3_5.setVisible(true);lyr_dwin5_6.setVisible(true);lyr_rwin2_7.setVisible(true);lyr_rwin1_8.setVisible(true);lyr_dwin6_9.setVisible(true);lyr_dwin4_10.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_dwin3_1,lyr_dwin2_2,lyr_dwin1_3,lyr_rwin4_4,lyr_rwin3_5,lyr_dwin5_6,lyr_rwin2_7,lyr_rwin1_8,lyr_dwin6_9,lyr_dwin4_10];
lyr_dwin3_1.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin2_2.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin1_3.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_rwin4_4.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_rwin3_5.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin5_6.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_rwin2_7.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_rwin1_8.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin6_9.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin4_10.set('fieldAliases', {'ShortName': 'ShortName', 'photo': 'photo', 'Winner': 'Winner', 'Party': 'Party', '1st': '1st', '2nd': '2nd', 'Gap': 'Gap', 'Result': 'Result', 'Note': 'Note', });
lyr_dwin3_1.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin2_2.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin1_3.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_rwin4_4.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_rwin3_5.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin5_6.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_rwin2_7.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_rwin1_8.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin6_9.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin4_10.set('fieldImages', {'ShortName': 'TextEdit', 'photo': 'TextEdit', 'Winner': 'TextEdit', 'Party': 'TextEdit', '1st': 'TextEdit', '2nd': 'TextEdit', 'Gap': 'TextEdit', 'Result': 'TextEdit', 'Note': 'TextEdit', });
lyr_dwin3_1.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin2_2.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin1_3.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_rwin4_4.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_rwin3_5.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin5_6.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_rwin2_7.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_rwin1_8.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin6_9.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin4_10.set('fieldLabels', {'ShortName': 'no label', 'photo': 'no label', 'Winner': 'header label', 'Party': 'header label', '1st': 'header label', '2nd': 'header label', 'Gap': 'header label', 'Result': 'header label', 'Note': 'header label', });
lyr_dwin4_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
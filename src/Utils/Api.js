const url = `http://localhost:3000/api`;

const Api = {
    getUserList: `${url}/getUserList`,
    login: `${url}/login`,
    province: [{
        value: '湖南省',
        label: '湖南省',
        children: [

            {

                value: '长沙市',

                label: '长沙市',

                children: [

                    { value: '芙蓉区', label: '芙蓉区' },

                    { value: '天心区', label: '天心区' },

                    { value: '岳麓区', label: '岳麓区' },

                    { value: '开福区', label: '开福区' },

                    { value: '雨花区', label: '雨花区' },

                    { value: '长沙县', label: '长沙县' },

                    { value: '望城县', label: '望城县' },

                    { value: '宁乡县', label: '宁乡县' },

                    { value: '浏阳市', label: '浏阳市' }

                ]

            },

            {

                value: '株洲市',

                label: '株洲市',

                children: [

                    { value: '荷塘区', label: '荷塘区' },

                    { value: '芦淞区', label: '芦淞区' },

                    { value: '石峰区', label: '石峰区' },

                    { value: '天元区', label: '天元区' },

                    { value: '株洲县', label: '株洲县' },

                    { value: '攸县', label: '攸县' },

                    { value: '茶陵县', label: '茶陵县' },

                    { value: '炎陵县', label: '炎陵县' },

                    { value: '醴陵市', label: '醴陵市' }

                ]

            },

            {

                value: '湘潭市',

                label: '湘潭市',

                children: [

                    { value: '雨湖区', label: '雨湖区' },

                    { value: '岳塘区', label: '岳塘区' },

                    { value: '湘潭县', label: '湘潭县' },

                    { value: '湘乡市', label: '湘乡市' },

                    { value: '韶山市', label: '韶山市' }

                ]

            },

            {

                value: '衡阳市',

                label: '衡阳市',

                children: [

                    { value: '珠晖区', label: '珠晖区' },

                    { value: '雁峰区', label: '雁峰区' },

                    { value: '石鼓区', label: '石鼓区' },

                    { value: '蒸湘区', label: '蒸湘区' },

                    { value: '南岳区', label: '南岳区' },

                    { value: '衡阳县', label: '衡阳县' },

                    { value: '衡南县', label: '衡南县' },

                    { value: '衡山县', label: '衡山县' },

                    { value: '衡东县', label: '衡东县' },

                    { value: '祁东县', label: '祁东县' },

                    { value: '耒阳市', label: '耒阳市' },

                    { value: '常宁市', label: '常宁市' }

                ]

            },

            {

                value: '邵阳市',

                label: '邵阳市',

                children: [

                    { value: '双清区', label: '双清区' },

                    { value: '大祥区', label: '大祥区' },

                    { value: '北塔区', label: '北塔区' },

                    { value: '邵东县', label: '邵东县' },

                    { value: '新邵县', label: '新邵县' },

                    { value: '邵阳县', label: '邵阳县' },

                    { value: '隆回县', label: '隆回县' },

                    { value: '洞口县', label: '洞口县' },

                    { value: '绥宁县', label: '绥宁县' },

                    { value: '新宁县', label: '新宁县' },

                    { value: '城步苗族自治县', label: '城步苗族自治县' },

                    { value: '武冈市', label: '武冈市' }

                ]

            },

            {

                value: '岳阳市',

                label: '岳阳市',

                children: [

                    { value: '岳阳楼区', label: '岳阳楼区' },

                    { value: '云溪区', label: '云溪区' },

                    { value: '君山区', label: '君山区' },

                    { value: '岳阳县', label: '岳阳县' },

                    { value: '华容县', label: '华容县' },

                    { value: '湘阴县', label: '湘阴县' },

                    { value: '平江县', label: '平江县' },

                    { value: '汨罗市', label: '汨罗市' },

                    { value: '临湘市', label: '临湘市' }

                ]

            },

            {

                value: '常德市',

                label: '常德市',

                children: [

                    { value: '武陵区', label: '武陵区' },

                    { value: '鼎城区', label: '鼎城区' },

                    { value: '安乡县', label: '安乡县' },

                    { value: '汉寿县', label: '汉寿县' },

                    { value: '澧县', label: '澧县' },

                    { value: '临澧县', label: '临澧县' },

                    { value: '桃源县', label: '桃源县' },

                    { value: '石门县', label: '石门县' },

                    { value: '津市市', label: '津市市' }

                ]

            },

            {

                value: '张家界市',

                label: '张家界市',

                children: [

                    { value: '永定区', label: '永定区' },

                    { value: '武陵源区', label: '武陵源区' },

                    { value: '慈利县', label: '慈利县' },

                    { value: '桑植县', label: '桑植县' }

                ]

            },

            {

                value: '益阳市',

                label: '益阳市',

                children: [

                    { value: '资阳区', label: '资阳区' },

                    { value: '赫山区', label: '赫山区' },

                    { value: '南县', label: '南县' },

                    { value: '桃江县', label: '桃江县' },

                    { value: '安化县', label: '安化县' },

                    { value: '沅江市', label: '沅江市' }

                ]

            },

            {

                value: '郴州市',

                label: '郴州市',

                children: [

                    { value: '北湖区', label: '北湖区' },

                    { value: '苏仙区', label: '苏仙区' },

                    { value: '桂阳县', label: '桂阳县' },

                    { value: '宜章县', label: '宜章县' },

                    { value: '永兴县', label: '永兴县' },

                    { value: '嘉禾县', label: '嘉禾县' },

                    { value: '临武县', label: '临武县' },

                    { value: '汝城县', label: '汝城县' },

                    { value: '桂东县', label: '桂东县' },

                    { value: '安仁县', label: '安仁县' },

                    { value: '资兴市', label: '资兴市' }

                ]

            },

            {

                value: '永州市',

                label: '永州市',

                children: [

                    { value: '零陵区', label: '零陵区' },

                    { value: '冷水滩区', label: '冷水滩区' },

                    { value: '祁阳县', label: '祁阳县' },

                    { value: '东安县', label: '东安县' },

                    { value: '双牌县', label: '双牌县' },

                    { value: '道县', label: '道县' },

                    { value: '江永县', label: '江永县' },

                    { value: '宁远县', label: '宁远县' },

                    { value: '蓝山县', label: '蓝山县' },

                    { value: '新田县', label: '新田县' },

                    { value: '江华瑶族自治县', label: '江华瑶族自治县' }

                ]

            },

            {

                value: '怀化市',

                label: '怀化市',

                children: [

                    { value: '鹤城区', label: '鹤城区' },

                    { value: '中方县', label: '中方县' },

                    { value: '沅陵县', label: '沅陵县' },

                    { value: '辰溪县', label: '辰溪县' },

                    { value: '溆浦县', label: '溆浦县' },

                    { value: '会同县', label: '会同县' },

                    { value: '麻阳苗族自治县', label: '麻阳苗族自治县' },

                    { value: '新晃侗族自治县', label: '新晃侗族自治县' },

                    { value: '芷江侗族自治县', label: '芷江侗族自治县' },

                    { value: '靖州苗族侗族自治县', label: '靖州苗族侗族自治县' },

                    { value: '通道侗族自治县', label: '通道侗族自治县' },

                    { value: '洪江市', label: '洪江市' }

                ]

            },

            {

                value: '娄底市',

                label: '娄底市',

                children: [

                    { value: '娄星区', label: '娄星区' },

                    { value: '双峰县', label: '双峰县' },

                    { value: '新化县', label: '新化县' },

                    { value: '冷水江市', label: '冷水江市' },

                    { value: '涟源市', label: '涟源市' }

                ]

            },

            {

                value: '湘西土家族苗族自治州',

                label: '湘西土家族苗族自治州',

                children: [

                    { value: '吉首市', label: '吉首市' },

                    { value: '泸溪县', label: '泸溪县' },

                    { value: '凤凰县', label: '凤凰县' },

                    { value: '花垣县', label: '花垣县' },

                    { value: '保靖县', label: '保靖县' },

                    { value: '古丈县', label: '古丈县' },

                    { value: '永顺县', label: '永顺县' },

                    { value: '龙山县', label: '龙山县' }

                ]

            }

        ]
    }]
}

export default Api;
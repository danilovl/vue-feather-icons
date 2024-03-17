const SunIcon = {
    name: 'SunIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('circle', {cx: "12", cy: "12", r: "5"}),
                    render('line', {x1: "12", y1: "1", x2: "12", y2: "3"}),
                    render('line', {x1: "12", y1: "21", x2: "12", y2: "23"}),
                    render('line', {x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64"}),
                    render('line', {x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78"}),
                    render('line', {x1: "1", y1: "12", x2: "3", y2: "12"}),
                    render('line', {x1: "21", y1: "12", x2: "23", y2: "12"}),
                    render('line', {x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36"}),
                    render('line', {x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22"})
                ]
            )
        }
    }
}

export default SunIcon

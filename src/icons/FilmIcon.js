const FilmIcon = {
    name: 'FilmIcon',
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
                    render('rect', {x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18"}),
                    render('line', {x1: "7", y1: "2", x2: "7", y2: "22"}),
                    render('line', {x1: "17", y1: "2", x2: "17", y2: "22"}),
                    render('line', {x1: "2", y1: "12", x2: "22", y2: "12"}),
                    render('line', {x1: "2", y1: "7", x2: "7", y2: "7"}),
                    render('line', {x1: "2", y1: "17", x2: "7", y2: "17"}),
                    render('line', {x1: "17", y1: "17", x2: "22", y2: "17"}),
                    render('line', {x1: "17", y1: "7", x2: "22", y2: "7"})
                ]
            )
        }
    }
}

export default FilmIcon

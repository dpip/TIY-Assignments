var start = [0, 2];
for (var n = 2; n < 10; n++)
{
    start[ n ] = start[ n - 1 ] + start[ n - 2 ];
    console.log(start);
}
